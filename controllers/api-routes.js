const express = require('express');
const path = require('path')
const router = express.Router();
var db = require('../models');


router.post('/add', function(request, response) {

    console.log(request);

    if (request.body.burger_name) {
        db.Burger.create({ burgerName: request.body.burger_name })
            .then(function() {
                response.redirect('/');
            });
    }
});

router.post('/eat/:id', function(request, response) {
    console.log(request);
    db.Burger.update(

        {
            devoured: request.body.devoured
        },

        {
            where: {
                id: request.params.id
            }
        }
    ).then(function() {
        response.redirect('/');
    })
});

module.exports = router;