

import PaidBill from "../../../models/PaidBills.js";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";


const getAllBills= async (req, res, next) => {
    try {
      // Find all pending confirmations
      const pendingBills = await PaidBill.find({ status: 'pending' });
      
      // Return the pending confirmations
      return sendFinalResponse(res, 200, true, 'Pending confirmations fetched successfully', { pendingBills });
    } catch (error) {
      console.error("Error fetching pending confirmations:", error);
      return next(error);
    }
  };

  export default getAllBills;