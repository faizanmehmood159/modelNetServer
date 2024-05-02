import User from "../../../models/user.js"; // Ensure correct path to user model
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const getAllUsers = async (req, res, next) => {
  try {
    
    const users = await User.find();
    console.log(users);
    
    return sendFinalResponse(res, 200, true, "Users retrieved successfully", { users });
  } catch (error) {
    console.error("Error getting users:", error);
    next(error);
  }
};

export default getAllUsers;
