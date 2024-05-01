// controllers/auth/resetPassword.js

import bcrypt from 'bcryptjs';
import User from '../../models/user.js';
import nodemailer from 'nodemailer'; 
import { generateOTP, sendOTP } from '../../utils/otpUtils.js'; // Import OTP utility function
import sendFinalResponse from '../../utils/sendFinalResponse.js';

// Function to handle the password reset process
const resetPassword = async (req, res, next) => {
  try {
    const { email, otp, newPassword } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return sendFinalResponse(res, 400, false, 'User not found');
    }

    // Validate OTP (optional)
    // Here you can add a validation step to verify the OTP sent to the user
    // For simplicity, we'll skip this step in this example

    // Update user's password
    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();

    return sendFinalResponse(res, 200, true, 'Password reset successfully');
  } catch (error) {
    console.error('Error in reset password:', error);
    next(error);
  }
};

// Function to send OTP for password reset
const sendOTPForReset = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return sendFinalResponse(res, 400, false, 'User not found');
    }

    // Generate OTP
    const otp = generateOTP();

    // Send OTP to user's email
    await sendOTP(email, otp);

    return sendFinalResponse(res, 200, true, 'OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP for password reset:', error);
    next(error);
  }
};

export default resetPassword; // Export resetPassword as default
export { sendOTPForReset };
