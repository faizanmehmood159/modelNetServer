import User from "../../../models/user.js";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import { ApiError } from "../../../utils/apiErrors.js";
import passwordValidation from "../../../utils/passwordValidation.js";
import { EMAIL_REGEX } from "../../../constants/regex.js";
import { v4 as uuidv4 } from "uuid";
import  sendEmail from "../../../config/sendEmailVerification.js";

const signUp = async (req, res, next) => {
  try {
    const { name, password, email, phone_no } = req.body;

    if (!name || !password || !email || !phone_no) {
      throw new ApiError("Invalid Details", 400, "All fields are required", true);
    }

    const normalizedEmail = email.toLowerCase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json({ message: 'User already exists' });
    }

    if (password.length < 8 || !passwordValidation.strength(password)) {
      throw new ApiError("Invalid Details", 400, "Password must be at least 8 characters long and meet strength requirements", true);
    }

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      throw new ApiError("Invalid Details", 400, "Invalid email format", true);
    }

    const verificationToken = uuidv4();
    const newUser = new User({
      name,
      email: normalizedEmail,
      phone_no,
      password,
      verificationToken,
    });

    const savedUser = await newUser.save();
    if (!savedUser) {
      throw new ApiError("User creation failed", 500, "User creation failed", true);
    }

    const verificationUrl = `http://your-frontend-url/verify/${verificationToken}`;
    const emailContent = `
  <p>Please verify your email by clicking the button below:</p>
  <button style="background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;"> 
  <a href="${verificationUrl}" style="text-decoration: none; color: white;">Verify Email</a>
  </button>
`;

    await sendEmail(normalizedEmail, emailContent);

    return sendFinalResponse(res, 200, true, "User created successfully. Please check your email to verify your account.");
  } catch (error) {
    console.error("Error in signUp:", error);
    next(error);
  }
};

export default signUp;
