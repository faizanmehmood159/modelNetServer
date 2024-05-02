import Complaint from "../../../models/complaint.js"; // Ensure correct path to complaint model
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const getAllComplaints = async (req, res, next) => {
  try {
    // Fetch all complaints from the database
    const complaints = await Complaint.find();
    console.log(complaints)

    // Send response with fetched complaints
    return sendFinalResponse(res, 200, true, "Complaints retrieved successfully", { complaints });
  } catch (error) {
    console.error("Error getting complaints:", error);
    next(error);
  }
};

export default getAllComplaints;
