var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('foodItems');

var service = {};

service.getAll = getAll;
service.create = create;
service.getById = getById;
service.update = update;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    db.foodItems.find().toArray(function (err, items) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(items);
    });

    return deferred.promise;
}

function create(itemObject) {
	var deferred = Q.defer();
	db.foodItems.insert(
			itemObject,
			function(err, doc) {
				if (err) deferred.reject(err.name + ': ' + err.message);

				deferred.resolve();
			});

	return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.foodItems.findById(_id, function (err, item) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (item) {
            // return item
            deferred.resolve(item);
        } else {
            // item not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function update(_id, itemParam) {
    var deferred = Q.defer();

    // validation
    db.foodItems.findById(_id, function (err, item) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (item) {
            updateItem();
        }
    });

    function updateItem() {
        // fields to update

        db.foodItems.update(
            { _id: mongo.helper.toObjectID(_id) },
            { 
            	$set: {
            		"outofstock": itemParam.outofstock
            	}
            },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}