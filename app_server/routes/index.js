/*
 * Developer: Justin Carlo Florida
 * Course: CS-465 Full Stack Development I
 * Module Two: MVC Architecture
 * Description: Homepage routing for Travlr Getaways.
 */

const express = require('express');
const router = express.Router();

const controlMain = require('../controllers/main');

// Direct homepage requests to the main controller.
router.get('/', controlMain.index);

module.exports = router;
