const express = require('express');
const path = require('path')
const router = express.Router();
var db = require('../models');


router.get('/', function(request, response) {

    db.Burger.findAll({})
    .then(function(burgers){
        let newBurgers = [];
        for (let i = 0; i < burgers.length; i ++) {

        const element = burgers[i];
        newBurgers.push(element.dataValues);
        
        }
        console.log(newBurgers);
        response.render('index', {burgers: newBurgers});
    })
});

module.exports = router; 