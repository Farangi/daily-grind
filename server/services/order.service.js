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

service.getAll = getAll;
service.getAllForUser = getAllForUser;
service.create = create;
service.checkBalanceAvailability = checkBalanceAvailability;
service.calculatePrice = calculatePrice;
service.dispatch = dispatch;

module.exports = service;

function getAll(date) {
	var deferred = Q.defer();
	
	let time = {
			$gte : new Date(date.fromDate).toISOString(),
			$lt : new Date(date.toDate).toISOString()
		};
	db.orders.find({
		time : time
	}).toArray(function(err, orders) {
		if (err) deferred.reject(err.name + ': ' + err.message);
		deferred.resolve(orders);
	});

	return deferred.promise;
}

function getAllForUser(userId) {
	var deferred = Q.defer();
	if(userId) {
		db.orders.find({
			userId : userId
		}).toArray(function(err, orders) {
			if (err) deferred.reject(err.name + ': ' + err.message);
			deferred.resolve(orders);
		});
	}
	return deferred.promise;
}

function calculatePrice(orderObject) {
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
						deferred.resolve(totalPrice);
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
	orderObject.time = new Date().toISOString();
	if (orderObject.location !== undefined) {
		if (orderObject.location.location !== undefined) {
			orderObject.location = {
				name : orderObject.location.location.name,
				subLocation : orderObject.location.subLocation
			};
		}
	}

	if (orderObject.adminId) {
		db.orders.insert(
			orderObject,
			function(err, doc) {
				if (err) deferred.reject(err.name + ': ' + err.message);

				deferred.resolve();
			});
	} else {
		checkBalanceAvailability(orderObject)
			.then(function(availability) {
				if (availability) {
					orderObject.payment = 'balance';
					calculatePrice(orderObject)
						.then(function(price) {
							userService.deductBalance(orderObject.userId, price)
								.catch(function(err) {
									deferred.reject(err.name + ': ' + err.message);
								});
						})
						.catch(function(err) {
							deferred.reject(err.name + ': ' + err.message);
						});
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
	}

	return deferred.promise;
}

function dispatch(_id) {
	var deferred = Q.defer();

	// validation
	db.orders.findById(_id, function(err, order) {
		if (err) deferred.reject(err.name + ': ' + err.message);

		if (order) {
			dispatchOrder();
		}
	});

	function dispatchOrder() {
		// fields to update

		db.orders.update(
			{
				_id : mongo.helper.toObjectID(_id)
			},
			{
				$set : {
					"status" : 'dispatched'
				}
			},
			function(err, doc) {
				if (err) deferred.reject(err.name + ': ' + err.message);

				deferred.resolve();
			});
	}

	return deferred.promise;
}