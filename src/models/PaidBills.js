// payment.js

import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  installationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Installation', // Reference to the Installation model
    required: true
  },
  billId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bill', // Reference to the Bill model if applicable
    required: true
  },
  
  method: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'successful' // Default status is 'successful'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
