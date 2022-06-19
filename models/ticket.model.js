const mongoose = require('mongoose');;

const ticketSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      default:""
    },
    status: {
      type: String,
      required: true,
      default:"pending"
    }
  },
  {
    timestamps: true,
  }
);


const ticket = mongoose.model('Ticket', ticketSchema);

module.exports = ticket;
