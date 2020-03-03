var express = require('express');
var router = express.Router();
const ticketCtrl = require('../controllers/tickets');

/* GET users listing. */
router.get('/flights/show', ticketCtrl.new);
router.post('/tickets', ticketCtrl.create);
router.post('/flights/:id/tickets', ticketCtrl.addFlight);

module.exports = router;
