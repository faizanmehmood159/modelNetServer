// src/controllers/complaint.js

import Complaint from "../models/complaint.js"; // Ensure correct path to complaint model
import sendFinalResponse from "../utils/sendFinalResponse.js";

const registerComplaint = async (req, res, next) => {
  try {
    const { name, email, phone_no, complaint } = req.body;

    // Create a new Complaint document
    const newComplaint = new Complaint({
      name,
      email,
      phone_no,
      complaint,
    });

    // Save the complaint to the database
    await newComplaint.save();

    return sendFinalResponse(res, 201, true, "Complaint registered successfully", { complaint: newComplaint });
  } catch (error) {
    console.error("Error registering complaint:", error);
    next(error);
  }
};

export default registerComplaint;
