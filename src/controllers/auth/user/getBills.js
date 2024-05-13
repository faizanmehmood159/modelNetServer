// Import necessary modules and models

import PaidBill from '../../../models/PaidBills.js';
import sendFinalResponse from "../../../utils/sendFinalResponse.js";



// Endpoint to fetch paid bills for a specific user
const getBills = async (req, res, next) => {
  try {
    const userId = req.user.id; // Assuming user ID is available in the request object after authentication
    
    // Find all paid bills for the user
    const paidBills = await PaidBill.find({ userId });
    
    // Return the paid bills
    return sendFinalResponse(res, 200, true, 'Paid bills fetched successfully', { paidBills });
  } catch (error) {
    console.error("Error fetching paid bills:", error);
    return next(error);
  }
};

export default getBills;
