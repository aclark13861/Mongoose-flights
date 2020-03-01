const express = require('express');
const router = express.Router();
const detailsCtrl = require('../controllers/details')

router.get('details/new', detailsCtrl.new);
router.post('/flights/:id/details', detailsCtrl.create);

module.exports = router;