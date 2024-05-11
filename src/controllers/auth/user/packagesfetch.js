import Installation from '../../../models/installation.js';
import User from '../../../models/user.js';
import sendFinalResponse from '../../../utils/sendFinalResponse.js';

const fetchBills = async (req, res, next) => {
  try {
    const { _id: userId } = req.query; // Assuming userId is passed in the request parameters
    
    // Find the latest installation document associated with the user
    const installation = await Installation.findOne({ userId }).sort({ createdAt: -1 });
    if (!installation) {
      return sendFinalResponse(res, 404, false, 'Installation not found');
    }

    const { packages } = installation;

    // Find the user document
    const user = await User.findById(userId);
    if (!user) {
      return sendFinalResponse(res, 404, false, 'User not found');
    }

    // Generate bill
    const bill = {
      packages 
    };
    console.log(bill);

    return sendFinalResponse(res, 200, true, 'Bills fetched successfully', { bill });
  } catch (error) {
    console.error("Error fetching bills:", error);
    return next(error);
  }
};

export default fetchBills;
