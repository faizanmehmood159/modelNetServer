import Complaint from "../../../models/complaint.js"; // Ensure correct path to complaint model
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const registerComplaint = async (req, res, next) => {
  try {
    // Extract user details from authenticated request
    const { _id: userId} = req.user;

    const { name, email,phone_no, complaint } = req.body;

    // Create a new Complaint document with user ID
    const newComplaint = new Complaint({
      userId, // Include user ID in the complaint data
      name,
      email,
      phone_no,
      complaint,
    });

    // Save the complaint to the database
    await newComplaint.save();

    // Include the logged-in user details in the response
    return sendFinalResponse(res, 201, true, "Complaint registered successfully", { 
      complaint: newComplaint,
      user: req.user // Include logged-in user details in the response
    });
  } catch (error) {
    console.error("Error registering complaint:", error);
    next(error);
  }
};

export default registerComplaint;
