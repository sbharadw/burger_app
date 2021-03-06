-- Drops the burgerDB if it exists currently --
DROP DATABASE IF EXISTS burger_db;
-- Creates the burgerDB database --
CREATE DATABASE  burger_db;
-- Use burgerDB database --


-- In case the DB is not created via sequelize model please use this schema to create a table in MySQL Workbench --

CREATE TABLE Burger (
	id Int AUTO_INCREMENT NOT NULL,
	burgerName VARCHAR(255) NOT NULL,
	devoured boolean DEFAULT 0,
	time TIMESTAMP DEFAULT now() on UPDATE now(),
	PRIMARY KEY (id) 
    );


