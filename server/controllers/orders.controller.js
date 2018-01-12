var config = require('config.json');
var express = require('express');
var router = express.Router();
var orderService = require('services/order.service');

// routes
router.post('/create', create);

module.exports = router;

function create(req, res) {
    orderService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
