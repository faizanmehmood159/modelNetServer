// controllers/auth/signin.js

import User from "../../../models/user.js";
import bcrypt from "bcryptjs";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import { ApiError } from "../../../utils/apiErrors.js";

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(
        "Invalid Request",
        400,
        "Email and password are required."
      );
    }

   
    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      throw new ApiError("Authentication Failed", 401, "Email not found.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ApiError(
        "Authentication Failed",
        401,
        "Incorrect password."
      );
    }

   
    const token = await user.generateAuthToken();
   
    return sendFinalResponse(res, 200, true, "Signed in successfully", {
      token,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._id
    });
  } catch (error) {
    console.error("Signin Error:", error);
    next(error);
  }
};

export default signIn;
