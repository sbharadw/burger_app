const express = require('express');
const path = require('path')
const router = express.Router();
var db = require('../models');


router.get('/', function(request, response) {

    db.Burger.findAll({})
    .then(function(burgers){
        response.render('index', {burgers});
    })
});

module.exports = router; 