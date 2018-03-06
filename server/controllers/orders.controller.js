var config = require('config.json');
var express = require('express');
var router = express.Router();
var orderService = require('services/order.service');

// routes
router.get('/', getAll);
router.post('/create', create);
router.post('/checkBalanceAvailability', checkBalanceAvailability);

module.exports = router;

function getAll(req, res) {
	orderService.getAll()
        .then(function (orders) {
            res.send(orders);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function create(req, res) {
    orderService.create(req.body)
        .then(function () {
            res.sendStatus(200);
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
