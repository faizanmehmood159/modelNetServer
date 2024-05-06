import User from "../../models/user.js"; // Ensure correct path to user model
import sendFinalResponse from "../../utils/sendFinalResponse.js";

const getLoggedInUserName = async (req, res, next) => {
  try {
    // Assuming the user is authenticated and their details are available in req.user
    const { name } = req.user;
    
    return sendFinalResponse(res, 200, true, "User name retrieved successfully", { name });
  } catch (error) {
    console.error("Error getting user name:", error);
    next(error);
  }
};

export default getLoggedInUserName;
