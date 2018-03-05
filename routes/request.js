var express = require('express');
var router = express.Router();
var requestService = require('../service/requestService');

router.get('/buffer', function(req, res, next) {
    requestService.buffer(req, res, next);
});

router.get('/selfintersect', function(req, res, next) {
    requestService.selfintersect(req, res, next);
});

module.exports = router;