import PaidBill from "../../../models/PaidBills.js";
import User from "../../../models/user.js"; // Import the User model
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const getAllBills = async (req, res, next) => {
  try {
    // Find all pending confirmations and populate the user details
    const pendingBills = await PaidBill.find().populate('userId', 'name');
    
    // Return the pending confirmations
    return sendFinalResponse(res, 200, true, 'Pending confirmations fetched successfully', { pendingBills });
  } catch (error) {
    console.error("Error fetching pending confirmations:", error);
    return next(error);
  }
};

export default getAllBills;
