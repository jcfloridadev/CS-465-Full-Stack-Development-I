/*
 * Developer: Justin Carlo Florida
 * Course: CS-465 Full Stack Development I
 * Module Three: Static HTML to Templates with JSON
 * Description: Controller for the Travlr Getaways travel page.
 */

// Load Node.js file system module
const fs = require('fs');

// Read and convert the JSON trip data
const trips = JSON.parse(
    fs.readFileSync('./data/trips.json', 'utf8')
);

// Render the travel page using JSON data
const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        trips: trips
    });
};

// Export the travel controller
module.exports = {
    travel
};
