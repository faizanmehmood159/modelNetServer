// processPayment.js

import Installation from '../../../models/installation.js';
import User from '../../../models/user.js';
import Payment from '../../../models/PaidBills.js';
import sendFinalResponse from '../../../utils/sendFinalResponse.js';

const confirmPayment = async (req, res, next) => {
    try {
      const { userId, paymentStatus } = req.body; // Assuming userId and paymentStatus are sent in the request body
      
      const installation = await Installation.findOne({ userId }).sort({ createdAt: -1 });
    if (!installation) {
      return sendFinalResponse(res, 404, false, 'Installation not found');
    }

    const { packages } = installation;

    const user = await User.findById(userId);
    if (!user) {
      return sendFinalResponse(res, 404, false, 'User not found');
    }
  
      // Create a new payment document
      const PaidBills = new Payment({
        installationId: installation._id,
        billId: installation._id, 
        method: 'online',
        status: paymentStatus,
        createdAt: new Date(),

      });
  
      await PaidBills.save();
  
      // Return success response
      return sendFinalResponse(res, 200, true, 'Payment processed successfully', { paymentStatus: 'paid' });
    } catch (error) {
      console.error("Error processing payment:", error);
      return next(error);
    }
  };
  

export default confirmPayment;
