// this file contains logic to execute in response
// get event and send to the view

exports.getAllEvents = (req, res) => {
  res.status(200).render("event", { h1: "All Events", title: "Events List" });
};

exports.getEventById = (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .render("event", { h1: `Event ${id}`, title: "Event Details" });
};
