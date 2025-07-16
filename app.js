const express = require("express");
const app = express();
const morgan = require("morgan"); // HTTP request logger middleware
const path = require("path");

// Import event routes
const eventRoutes = require("./routes/events.js");
const attendeeRoutes = require("./routes/attendees");
const indexRoutes = require("./routes/index.js");

// Middleware to log requests
app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public directory
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use("/events", eventRoutes);
app.use("/attendees", attendeeRoutes);
app.use("/", indexRoutes); // Use index routes for the root path

// template engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.listen(3000);
