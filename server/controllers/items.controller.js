var express = require('express');
var router = express.Router();
var itemService = require('services/item.service');

//routes
router.get('/', getAll);

module.exports = router;

function getAll(req, res) {
	itemService.getAll()
        .then(function (items) {
            res.send(items);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}