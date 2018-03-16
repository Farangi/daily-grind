var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.getUserNameById = getUserNameById;
service.getAccountBalance = getAccountBalance;
service.create = create;
service.update = update;
service.updateBalance = updateBalance;
service.deductBalance = deductBalance;
service.delete = _delete;

module.exports = service;

function authenticate(username, password) {
    var deferred = Q.defer();    
    db.users.findOne({ username: username }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            deferred.resolve({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: jwt.sign({ sub: user._id }, config.secret)
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}


function getAll() {
    var deferred = Q.defer();

    db.users.find().toArray(function (err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        users = _.map(users, function (user) {
            return _.omit(user, 'hash');
        });

        deferred.resolve(users);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getUserNameById(_id) {
    var deferred = Q.defer();
    db.users.findById(_id,{ username: 1 }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        
        if (user) {
            // return user with username
            deferred.resolve(user);
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getAccountBalance(_id) {
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user's account balance
        	if(user.balance){
        		deferred.resolve(user.balance);
        	} else{
        		deferred.resolve(0);
        	}
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();
    
    if(userParam.username && userParam.password){
    	// validation
        db.users.findOne(
            { username: userParam.username },
            function (err, user) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                if (user) {
                    // username already exists
                    deferred.reject('Username "' + userParam.username + '" is already taken');
                } else {
                    createUser();
                }
            });

        function createUser() {
            // set user object to userParam without the cleartext password
            var user = _.omit(userParam, 'password');

            // add hashed password to user object
            user.hash = bcrypt.hashSync(userParam.password, 10);
            user.balance = 0;

            db.users.insert(
                user,
                function (err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    deferred.resolve();
                });
        }
    }
    else{
    	deferred.reject('Invalid username or password');
    }

    return deferred.promise;
}

function update(_id, userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne(
                { username: userParam.username },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (user) {
                        // username already exists
                        deferred.reject('Username "' + user.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {
            password: userParam.password,
            cellPhone: userParam.cellPhone,
            username: userParam.username
        };

        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function updateBalance(_id, userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        else {
        	if (user){
        		if(user.balance){
        			// fields to update
        	        var set = {
        	            balance: (user.balance + userParam.amount)
        	        };
        	        updateUserBalance(set);
        		} else {
        			// fields to update
        	        var set = {
        	            balance: userParam.amount
        	        };
        	        updateUserBalance(set);
        		}
        	}
        	else
        		deferred.reject("Unable to update balance.");
        }
    });

    function updateUserBalance(set) {
        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }
    return deferred.promise;
}

function deductBalance(_id, price) {
    var deferred = Q.defer();

    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        else {
        	if (user){
        		if(user.balance){
        			// fields to update
        	        var set = {
        	            balance: (user.balance - price)
        	        };
        	        updateUserBalance(set);
        		}
        	}
        	else
        		deferred.reject("Unable to deduct balance.");
        }
    });

    function updateUserBalance(set) {
        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }
    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}