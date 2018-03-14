var config = require('config.json');
var express = require('express');
var router = express.Router();
var orderService = require('services/order.service');
var userService = require('services/user.service');

// routes
router.get('/', getAll);
router.get('/user/:userId', getAllForUser);
router.post('/create', create);
router.post('/checkBalanceAvailability', checkBalanceAvailability);
router.put('/:_id', dispatchOrder);

module.exports = router;

function getAll(req, res) {
	orderService.getAll(req.query)
        .then(function (orders) {
            res.send(orders);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAllForUser(req, res) {
	orderService.getAllForUser(req.params.userId)
        .then(function (orders) {
            res.send(orders);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function create(req, res) {
	var io = req.app.get('socketio');
    orderService.create(req.body)
        .then(function (order) {
            res.status(200).send(order);
            if(req.body.userId){
            	userService.getUserNameById(req.body.userId)
            		.then(user => {
            			io.emit('new-order', { type: 'order', text: 'You have 1 new order from '+ user.username });
            		})
            		.catch(err => {
            			res.status(400).send(err);
            			io.emit('new-order', { type: 'error', text: 'Error while placing order username not Found!'});
            		});
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function checkBalanceAvailability(req, res) {
	//console.log("req.order = "+JSON.stringify(req.body));
    orderService.checkBalanceAvailability(req.body)
        .then(function (availability) {
        	res.send(availability);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function dispatchOrder(req, res) {
	orderService.dispatch(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
