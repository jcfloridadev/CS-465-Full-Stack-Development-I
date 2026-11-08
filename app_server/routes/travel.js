/*
 * Developer: Justin Carlo Florida
 * Course: CS-465 Full Stack Development I
 * Module Two: MVC Architecture
 * Description: Routing for the Travlr Getaways travel page.
 */

const express = require('express');
const router = express.Router();

const controlTravel = require('../controllers/travel');

// Direct travel page requests to the travel controller.
router.get('/', controlTravel.travel);

module.exports = router;
