// models/Payment.js

import mongoose from 'mongoose';


const paymentSchema = new mongoose.Schema(
  {
    amount: Number,
    description: String,
    status: String,
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;