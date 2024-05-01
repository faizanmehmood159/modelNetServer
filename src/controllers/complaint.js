//E:\React Native\Fyp\modelNetServer\src\controllers\complaint.js

import Complaint from "../models/complaint.js";

// Controller function to save a complaint
export const saveComplaint = async (req, res, next) => {
  try {
    const { id, name, email, phone_no, complaint } = req.body;

    // Create a new complaint object
    const newComplaint = new Complaint({
      id,
      name,
      email,
      phone_no,
      complaint,
    });

    // Save the complaint to the database
    const savedComplaint = await newComplaint.save();

    // Respond with success message
    res.status(201).json({
      success: true,
      message: "Complaint registered successfully",
      complaint: savedComplaint,
    });
  } catch (error) {
    // Pass error to error handling middleware
    next(error);
  }
};
