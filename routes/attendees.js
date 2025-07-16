// ATTENDEES FILE
// This file get http requests for events
// and routes them to the appropriate controller functions.
const express = require("express");
const router = express.Router();
const attendeeController = require("../controllers/attendeesController");

router.get("/", attendeeController.getAllAttendees); // Route to get all events
router.get("/:id", attendeeController.getAttendeeById); // Route to get event by id

module.exports = router;