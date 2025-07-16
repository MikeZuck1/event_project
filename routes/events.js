// EVENT FILE
// This file get http requests for events
// and routes them to the appropriate controller functions.
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents); // Route to get all events
router.get('/:id', eventController.getEventById); // Route to get event by id

module.exports = router;  