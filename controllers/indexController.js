const events = require("../data/eventsData.js");

exports.getAllIndex = (req, res) => {
  res.status(200).render("index", { events });
};

exports.getIndexById = (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .render("index", { h1: `Index ${id}`, title: "Index Details" });
};
