const express = require("express");
const router = express.Router();
const eventIndex = require("../controllers/indexController");

router.get("/", eventIndex.getAllIndex); // Route to get all events
router.get("/:id", eventIndex.getIndexById); // Route to get event by id

module.exports = router;
