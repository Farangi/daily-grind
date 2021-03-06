var config = require('config.json');
var express = require('express');
var router = express.Router();
var adminService = require('services/admin.service');

// routes
router.post('/authenticate', authenticate);
//router.post('/register', register);
//router.get('/', getAll);
//router.get('/:_id', getCurrent);
//router.get('/smartcard/:_id', getAccountBalance);
//router.put('/:_id', update);
//router.delete('/:_id', _delete);

module.exports = router;

function authenticate(req, res) {
	adminService.authenticate(req.body.username, req.body.password)
        .then(function (admin) {
            if (admin) {
                // authentication successful
                res.send(admin);
            } else {
                // authentication failed
                res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

//function register(req, res) {
//    userService.create(req.body)
//        .then(function () {
//            res.sendStatus(200);
//        })
//        .catch(function (err) {
//            res.status(400).send(err);
//        });
//}
//
//function getAll(req, res) {
//    userService.getAll()
//        .then(function (users) {
//            res.send(users);
//        })
//        .catch(function (err) {
//            res.status(400).send(err);
//        });
//}
//
//function getCurrent(req, res) {
//    userService.getById(req.user.sub)
//        .then(function (user) {
//            if (user) {
//                res.send(user);
//            } else {
//                res.sendStatus(404);
//            }
//        })
//        .catch(function (err) {
//            res.status(400).send(err);
//        });
//}
//
//function getAccountBalance(req, res) {
//    userService.getAccountBalance(req.user.sub)
//        .then(function (balance) {
//                res.status(200).send({balance:balance});
//        })
//        .catch(function (err) {
//            res.status(400).send(err);
//        });
//}
//
//function update(req, res) {
//    userService.update(req.params._id, req.body)
//        .then(function () {
//            res.sendStatus(200);
//        })
//        .catch(function (err) {
//            res.status(400).send(err);
//        });
//}
//
//function _delete(req, res) {
//    userService.delete(req.params._id)
//        .then(function () {
//            res.sendStatus(200);
//        })
//        .catch(function (err) {
//            res.status(400).send(err);
//        });
//}