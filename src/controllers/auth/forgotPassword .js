// controllers/auth/forgotPassword.js

import User from "../../models/user.js";
import { generateOTP, sendOTP } from "../../utils/otpUtils.js";
import sendFinalResponse from "../../utils/sendFinalResponse.js";

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return sendFinalResponse(res, 400, false, "User not found");
    }

    // Generate OTP
    const otp = generateOTP();

    // Send OTP to user's email
    await sendOTP(email, otp);

    // You can also save the OTP in the database for verification later

    return sendFinalResponse(res, 200, true, "OTP sent successfully");
  } catch (error) {
    console.error("Error in forgot password:", error);
    next(error);
  }
};

export default forgotPassword;
