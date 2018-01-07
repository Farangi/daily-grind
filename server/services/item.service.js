var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('foodItems');

var service = {};

service.getAll = getAll;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    db.foodItems.find().toArray(function (err, items) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(items);
    });

    return deferred.promise;
}