const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
      category: String
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);