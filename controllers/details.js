const Destination = require('../models/flight');

module.exports = {
  create,
  new: newDetail,
};

function create(req, res) {
    Destination.findById(req.params.id, function(err, flight) {
      console.log(flight, req.body);
      flight.destination.push(req.body);
      flight.save(function(err) {
          res.redirect(`/flights/${flight._id}`);
    });
  });
}

function newDetail(req, res) {
  Destination.find({}, function(err, details) {
    res.render('details/new', {
      details
    });
  });
}
