var express = require('express');
var router = express.Router();
var locationService = require('services/location.service');

//routes
router.get('/', getAll);
router.post('/create', create);
router.put('/:_id', update);
router.get('/:_id', getLocationDetails);
router.delete('/:_id', _delete);

module.exports = router;

function create(req, res) {
	locationService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
	locationService.getAll()
        .then(function (locations) {
            res.send(locations);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getLocationDetails(req, res) {
	locationService.getById(req.params._id)
        .then(function (location) {
            if (location) {
                res.send(location);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
	locationService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
	locationService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}