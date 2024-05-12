import Installation from '../../../models/installation.js';
import User from '../../../models/user.js';
import PaidBill from '../../../models/PaidBills.js';
import sendFinalResponse from '../../../utils/sendFinalResponse.js';

const confirmPayment = async (req, res, next) => {
  try {
    const { userId, someStringData } = req.body; // Assuming data is sent in the request body
    
    // Find the latest installation document associated with the user
    const installation = await Installation.findOne({ userId }).sort({ createdAt: -1 });
    if (!installation) {
      return sendFinalResponse(res, 404, false, 'Installation not found');
    }

    // Find the user document
    const user = await User.findById(userId);
    if (!user) {
      return sendFinalResponse(res, 404, false, 'User not found');
    }

    // Store the packages from the installation
    const packages = installation.packages;

    // Save data into PaidBill collection
    const paidBill = new PaidBill({
      userId,
      packages,
      someStringData
    });
    await paidBill.save();

    // Generate bill
    const bill = {
      packages,
      someStringData
    };

    // Log the generated bill
    console.log(bill);

    return sendFinalResponse(res, 200, true, 'Bills fetched successfully', { bill });
  } catch (error) {
    console.error("Error fetching bills:", error);
    return next(error);
  }
};

export default confirmPayment;
