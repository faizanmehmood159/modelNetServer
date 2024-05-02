// src/models/installation.js

import mongoose from 'mongoose';

const installationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_no: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "pending",
  },
  
}, { timestamps: true });

const Installation = mongoose.model('Installation', installationSchema);

export default Installation;
