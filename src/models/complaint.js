//E:\React Native\Fyp\modelNetServer\src\models\complaint.js

import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
});

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
