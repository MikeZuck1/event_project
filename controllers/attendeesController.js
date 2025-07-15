exports.getAllAttendees = (req, res) => {
  res
    .status(200)
    .render("attendees", { title: "Attendees List", h1: "All Attendees" });
};

exports.getAttendeeById = (req, res) => {
  const id = req.params.id;
  res.send(`Détails du participant ID: ${id}`);
};
