var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('locations');

var service = {};

service.getAll = getAll;
service.create = create;
service.getById = getById;
service.update = update;
service.delete = _delete;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    db.locations.find().toArray(function (err, locations) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(locations);
    });

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.locations.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}

function create(locationObject) {
	var deferred = Q.defer();
	db.locations.insert(
			locationObject,
			function(err, doc) {
				if (err) deferred.reject(err.name + ': ' + err.message);

				deferred.resolve();
			});

	return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.locations.findById(_id, function (err, location) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (location) {
            // return location
            deferred.resolve(location);
        } else {
            // item not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function update(_id, locationParam) {
    var deferred = Q.defer();

    // validation
    db.locations.findById(_id, function (err, location) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (location) {
            updateLocation();
        }
    });

    function updateLocation() {
        // fields to update

        db.locations.update(
            { _id: mongo.helper.toObjectID(_id) },
            { 
            	$set: {
//            		"outofstock": locationParam.outofstock
            	}
            },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}