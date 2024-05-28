// controllers/auth/user/getProfileImage.js

import User from "../../../models/user.js";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const getProfileImage = async (req, res, next) => {
  try {
    const { _id: userId } = req.user; // Get the user ID from the token authorization middleware

    const user = await User.findById(userId);

    if (!user) {
      return sendFinalResponse(res, 404, false, "User not found");
    }

    const profileImage = user.profileImage;

    if (!profileImage) {
      return sendFinalResponse(res, 404, false, "Profile image not found");
    }

    // Respond with the profile image URL or data
    return sendFinalResponse(res, 200, true, "Profile image retrieved successfully", { profileImage });
  } catch (error) {
    console.error("Error in getProfileImage:", error);
    next(error);
  }
};

export default getProfileImage;
