// controllers/auth/resetPassword.js

import bcrypt from 'bcryptjs';
import User from '../../../models/user.js';
import { generateOTP, sendOTP } from '../../../utils/otpUtils.js'; 
import sendFinalResponse from '../../../utils/sendFinalResponse.js';


const resetPassword = async (req, res, next) => {
  try {
    const { email, otp, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return sendFinalResponse(res, 400, false, 'User not found');
    }
    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();

    return sendFinalResponse(res, 200, true, 'Password reset successfully');
  } catch (error) {
    console.error('Error in reset password:', error);
    next(error);
  }
};

const sendOTPForReset = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return sendFinalResponse(res, 400, false, 'User not found');
    }

    const otp = generateOTP();

    await sendOTP(email, otp);

    return sendFinalResponse(res, 200, true, 'OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP for password reset:', error);
    next(error);
  }
};

export default resetPassword; 
export { sendOTPForReset };
