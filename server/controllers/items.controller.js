var express = require('express');
var router = express.Router();
var itemService = require('services/item.service');

//routes
router.get('/', getAll);
router.post('/create', create);
router.put('/:_id', update);
router.get('/:_id', getItemDetails);

module.exports = router;

function create(req, res) {
	itemService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
	itemService.getAll()
        .then(function (items) {
            res.send(items);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getItemDetails(req, res) {
    itemService.getById(req.params._id)
        .then(function (item) {
            if (item) {
                res.send(item);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
	itemService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}