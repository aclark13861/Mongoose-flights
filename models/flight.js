const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ticket = require('../models/ticket');

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
    },
});
const flightSchema = new Schema ({
airline: {
    type: String,
    enum: ['American', 'SouthWest', 'United']
},

flightNumber: {
    type: Number,
    min: 10,
    max: 9999
},

airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
},
// ticket: [{
//     type: Schema.Types.ObjectId,
//     ref: 'Ticket'
// }],

destination: [destinationSchema],

departure: {
    type: Date,
    default: function () {
        return new Date().getFullYear() + 1;
    },
},});

module.exports = mongoose.model(
    'Flight',
    flightSchema
);