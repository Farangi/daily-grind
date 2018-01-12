var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('orders');

var service = {};

service.create = create;

module.exports = service;

function create(orderObject) {
    var deferred = Q.defer();
    
    
    
//    if(userParam.username && userParam.password){
//    	// validation
//        db.users.findOne(
//            { username: userParam.username },
//            function (err, user) {
//                if (err) deferred.reject(err.name + ': ' + err.message);
//
//                if (user) {
//                    // username already exists
//                    deferred.reject('Username "' + userParam.username + '" is already taken');
//                } else {
//                    createUser();
//                }
//            });
//
//        function createUser() {
//            // set user object to userParam without the cleartext password
//            var user = _.omit(userParam, 'password');
//
//            // add hashed password to user object
//            user.hash = bcrypt.hashSync(userParam.password, 10);
//
//            db.users.insert(
//                user,
//                function (err, doc) {
//                    if (err) deferred.reject(err.name + ': ' + err.message);
//
//                    deferred.resolve();
//                });
//        }
//    }
//    else{
//    	deferred.reject('Invalid username or password');
//    }

    return deferred.promise;
}