// controllers/auth/signin.js

import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import sendFinalResponse from "../../utils/sendFinalResponse.js";
import { ApiError } from "../../utils/apiErrors.js";

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
      throw new ApiError(
        "Invalid Request",
        400,
        "Email and password are required."
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase();

    // Find user by email
    const user = await User.findOne({ email: normalizedEmail });

    // Check if user exists
    if (!user) {
      throw new ApiError("Authentication Failed", 401, "Email not found.");
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ApiError(
        "Authentication Failed",
        401,
        "Incorrect password."
      );
    }

    // Generate JWT
    const token = await user.generateAuthToken();
    // Adjust token expiration time as needed

    // Respond with success and include the JWT in the response
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
