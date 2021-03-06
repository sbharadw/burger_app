/**
 * @function
 * @returns @var - returns the Burger table with its columns.
 * @description - We export a function that takes in 2 variables (parameters) -
                                       1. sequelize,
                                       2. DataTypes
 * These parameters are provided to us automatically by index.js
 * Inside of our function we run the “sequelize.define” method. 
 * We pass it two arguments. The name of our model as a string, and an object 
   describing our model’s schema. Each property will represent a column in the database.
 * @param sequelize - in this case is actually our connection to our database. 
 * @param DataTypes - DataTypes will be used to define what type of data each property on our 
                      model should be. http://docs.sequelizejs.com/en/latest/api/datatypes/#string
 * @param Sequelize - Sequelize will be used to define what type of data each property on our 
                      model should be. http://docs.sequelizejs.com/en/latest/api/datatypes/#string
 */


//const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const Burger = sequelize.define('Burger', {

        burgerName: {
            type: DataTypes.STRING,
        },
    
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }

    });

    return Burger;

};


/*
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
time: {
            type: Sequelize.DATE,
        }

*/