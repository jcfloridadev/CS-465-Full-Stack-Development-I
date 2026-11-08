/*
 * Developer: Justin Carlo Florida
 * Course: CS-465 Full Stack Development I
 * Module Two: MVC Architecture and Handlebars
 * Description: Main Express application configuration.
 */

const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = 3000;

// Import MVC routes.
const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');

// Configure the Handlebars view engine.
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register reusable Handlebars header and footer partials.
hbs.registerPartials(
    path.join(__dirname, 'app_server', 'views', 'partials')
);


// Continue serving static assets from the public folder.
app.use(express.static(path.join(__dirname, 'public')));

// Register the MVC routes.
app.use('/', indexRouter);
app.use('/travel', travelRouter);

// Start the Express web server.
app.listen(PORT, () => {
    console.log(`Travlr website running at http://localhost:${PORT}`);
});
