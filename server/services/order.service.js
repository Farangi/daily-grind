var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, {
	native_parser : true
});
db.bind('orders');

var userService = require('./user.service');
var itemService = require('./item.service');

var service = {};

service.create = create;
service.checkBalanceAvailability = checkBalanceAvailability;

module.exports = service;

function checkBalanceAvailability(orderObject) {
	var deferred = Q.defer();

	var orderItems = orderObject.items;
	var totalPrice = 0;
	if (orderItems) {
		var itemsProcessed = 0;
		orderItems.forEach(function(orderItem, itemNumber, orderItems) {
			itemService.getById(orderItem._id)
				.then(function(item) {
					if (item) {
						totalPrice += item.price;
						// Check for Variants
						if (orderItem.variant) {
							var variants = item.variants;
							if (variants) {
								variants.forEach(function(variant) {
									if (variant.id == orderItem.variant) {
										totalPrice += variant.price;
									}
								});
							} else {
								deferred.reject('No food variant for this item!');
							}
						}
						// Check for Servings
						if (orderItem.serving) {
							var servings = item.servings;
							if (servings) {
								servings.forEach(function(serving) {
									if (serving.id == orderItem.serving) {
										totalPrice += serving.price;
									}
								});
							} else {
								deferred.reject('No food serving for this item!');
							}
						}
						// Check for Addons
						if (orderItem.addon) {
							var addons = item.addons;
							if (addons) {
								addons.forEach(function(addon) {
									if (addon.id == orderItem.addon) {
										totalPrice += addon.price;
									}
								});
							} else {
								deferred.reject('No food addon for this item!');
							}
						}
					} else {
						deferred.reject('No such food item!');
					}
					itemsProcessed++;
					if (itemsProcessed === orderItems.length) {
						//console.log("Price = " + totalPrice);
						userService.getAccountBalance(orderObject.userId)
							.then(function(balance) {
								if (balance && balance >= totalPrice) {
									deferred.resolve(true);
								} else {
									deferred.resolve(false);
								}
							})
							.catch(function(err) {
								deferred.reject(err.name + ': ' + err.message);
							});
					}
				})
				.catch(function(err) {
					deferred.reject(err.name + ': ' + err.message);
				});
		});
	} else {
		deferred.reject('No items in order');
	}

	return deferred.promise;
}

function create(orderObject) {
	var deferred = Q.defer();
	checkBalanceAvailability(orderObject)
		.then(function(availability) {
			if (availability) {
				orderObject.payment = 'balance';
			} else {
				orderObject.payment = 'cash';
			}
			orderObject.status = 'pending';
			db.orders.insert(
				orderObject,
				function(err, doc) {
					if (err) deferred.reject(err.name + ': ' + err.message);

					deferred.resolve();
				});
		})
		.catch(function(err) {
			deferred.reject(err.name + ': ' + err.message);
		});

	return deferred.promise;
}