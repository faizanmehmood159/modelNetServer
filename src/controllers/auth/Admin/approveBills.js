// Import the PaidBill model and necessary utilities
import PaidBill from "../../../models/PaidBills.js";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const approveBills = async (req, res, next) => {
    try {
      const { billId, status } = req.body;
  
      // Find the bill by ID
      const bill = await PaidBill.findById(billId);
      if (!bill) {
        return sendFinalResponse(res, 404, false, 'Bill not found');
      }
  
      // Check if status is 'approved'
      if (status !== 'approved') {
        return sendFinalResponse(res, 400, false, 'Invalid status provided');
      }
  
      // Update status to approved
      bill.status = 'approved';
      await bill.save();
  
      return sendFinalResponse(res, 200, true, 'Bill approved successfully', { bill });
    } catch (error) {
      console.error("Error approving bill:", error);
      return next(error);
    }
  };

export default approveBills;
