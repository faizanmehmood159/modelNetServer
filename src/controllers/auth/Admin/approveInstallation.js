import Installation from '../../../models/installation.js';
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import { ApiError } from "../../../utils/apiErrors.js";
// import sendEmail from "../../../utils/sendEmail.js";


const approveInstallation = async (req, res, next) => {
  try {
    const { installationFormId, status } = req.query;

    if (!status || !installationFormId) {
      throw new ApiError(
        "Invalid Details",
        400,
        "Required fields are missing",
        true
      );
    }

    // Find the installation form by ID and update its status
    const updatedForm = await Installation.findByIdAndUpdate(installationFormId, {
      $set: {
        status: status === "approved" ? "approved" : status === "delete" ? "delete" : "pending",
      },
    });

    if (!updatedForm) {
      throw new ApiError(
        "Invalid Details",
        400,
        "Installation form not found",
        true
      );
    }
     // Notify the user about the status update via email
    // const emailSubject = status === "approved" ? "Installation Form Approved" :
    //                     status === "delete" ? "Installation Form Deleted" : "Installation Form Pending";
    // const emailMessage = `Your installation form with ID ${formId} has been ${status}.`;

    // // Assuming updatedForm contains user's email address
    // await sendEmail(updatedForm.email, emailSubject, emailMessage);

    // Send a success response

    // Send a success response
    sendFinalResponse(
      res,
      200,
      true,
      "Installation form status updated successfully"
    );
  } catch (error) {
    next(error);
  }
};

export default approveInstallation;
