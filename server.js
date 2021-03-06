const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
// const helpers = require('handlebars-helpers')


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Static directory

app.use(express.static(__dirname + '/public'));

//using method-override
app.use(methodOverride('_method'));

//app.use(express.static('public'));
//app.use(express.static('Assets'))

// Configure template Engine and Main Template File
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars',
}));
// Setting template Engine
app.set('view engine', 'handlebars');

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

app.use(require('./controllers/api-routes.js'));
app.use(require('./controllers/html-routes.js'));

// Requiring our models for syncing
const db = require('./models');

// LISTENER
// The below code effectively "starts" our server 
// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
