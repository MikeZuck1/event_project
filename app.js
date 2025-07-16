const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
// Import event routes
const eventRoutes = require("./routes/events.js");
const attendeeRoutes = require("./routes/attendees");

// Middleware to log requests
app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public directory
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use("/events", eventRoutes);
app.use("/attendees", attendeeRoutes);

// template engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index"); // Render the index.pug template
});

app.listen(3000);
