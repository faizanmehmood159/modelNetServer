import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import { ApiError } from "../../../utils/apiErrors.js";
import otpGenerator from "../../../utils/otpGenerator.js";
import User from "../../../models/user.js";
import sendEmail from "../../../config/sendEmail.js";

const sendOtp = async (req, res, next) => {
  try {
    let { email } = req.body;
    console.log(email);
    if (!email) {
      throw new ApiError(
        "Invalid Details",
        400,
        "Required fields are missing",
        true
      );
    }

    email = email.toLowerCase();

    const otp = otpGenerator();

    const db = await User.updateOne({ email }, { $set: { otp } });

    if (db.modifiedCount == 0)
      throw new ApiError("Invalid Details", 400, "Email does not exist", true);

    sendEmail(
      email,
      "Hello, your OTP is " + otp + "  Do not share it with anyone else!"
    );

    return sendFinalResponse(res, 200, true, "Otp sent successfully");
  } catch (error) {
    next(error);
  }
};

export default sendOtp;
