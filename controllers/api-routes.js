const express = require('express');
const path = require('path')
const router = express.Router();
var db = require('../models');


router.post('/add', function(request, response) {

    if (request.body.burger_name) {
        db.Burger.create({ burgerName: request.body.burger_name })
            .then(function() {
                response.redirect('/');
            });
    }
});

router.put('/eat/:id', function(request, response) {
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