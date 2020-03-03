const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
 
 module.exports = {
   new: newTicket,
   create,
   addFlight
 };
 
 function newTicket(req, res) {
   Ticket.find({}, function(err, tickets) {
     res.render('flights/show', {
       flight,
       tickets
     });
   })
 }

 function create(req, res) {
   console.log("req.body",req.body);
     Ticket.create(req.body, function(err, ticket) {
       console.log(ticket);
         res.redirect(`/flights/${req.body.flight}`);
     });
 }

 function addFlight(req, res) {
    // Flight.findById(req.params.id, function(err, flight) {
    //    flight.ticket.push(req.body);
    //     flight.save(function(err) {
    //         res.redirect(`/flights/${flight._id}`);
        // });

//     });
}