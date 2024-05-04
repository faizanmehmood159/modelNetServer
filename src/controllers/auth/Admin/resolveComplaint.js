import Complaint from "../../../models/complaint.js";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import { ApiError } from "../../../utils/apiErrors.js";
// import sendEmail from "../../../utils/sendEmail.js";

const resolveComplaint = async (req, res, next) => {
  try {
    const { complaintId, status } = req.query;

    if (!status || !complaintId) {
      throw new ApiError(
        "Invalid Details",
        400,
        "Required fields are missing",
        true
      );
    }

    // Find the complaint by ID and update its status
    const updatedComplaint = await Complaint.findByIdAndUpdate(complaintId, {
      $set: {
        status: status === "resolved" ? "resolved" : "pending",
      },
    });

    if (!updatedComplaint) {
      throw new ApiError("Invalid Details", 400, "Complaint not found", true);
    }

    // const emailSubject = status === "resolved" ? "Complaint Resolved" : "Complaint Pending";
    // const emailMessage = `Your complaint with ID ${complaintId} has been ${status}.`;

    // await sendEmail(updatedComplaint.email, emailSubject, emailMessage);

    // Send a success response
    sendFinalResponse(res, 200, true, "Complaint status updated successfully");
  } catch (error) {
    next(error);
  }
};

export default resolveComplaint;
