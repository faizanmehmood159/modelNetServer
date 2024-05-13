// models/bill.js

import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  packages: {
    type: {
      id: {
        type: Number,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    },
    required: true
  },
  
});

const Bill = mongoose.model('Bill', billSchema);

export default Bill;
