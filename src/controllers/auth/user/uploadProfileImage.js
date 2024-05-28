// controllers/auth/user/uploadProfileImage.js

import User from "../../../models/user.js";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const uploadProfileImage = async (req, res, next) => {
  try {
    const { _id: userId } = req.user; 
    const { profileImage } = req.body; 

    const user = await User.findById(userId);

    if (!user) {
      return sendFinalResponse(res, 404, false, "User not found");
    }

    user.profileImage = profileImage;

    const savedUser = await user.save();

    if (!savedUser) {
      return sendFinalResponse(res, 500, false, "Failed to upload profile image");
    }

    return sendFinalResponse(res, 200, true, "Profile image uploaded successfully");
  } catch (error) {
    console.error("Error in uploadProfileImage:", error);
    next(error);
  }
};

export default uploadProfileImage;
