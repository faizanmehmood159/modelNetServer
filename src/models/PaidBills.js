// models/paidBill.js
import mongoose from 'mongoose';

const paidBillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  packages: {
    type: [String],
    required: true
  },
  someStringData: {
    type: String,
    required: true
  },
  
}, { timestamps: true });

const PaidBill = mongoose.model('PaidBill', paidBillSchema);

export default PaidBill;
