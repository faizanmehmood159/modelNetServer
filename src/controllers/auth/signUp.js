//src/controllers/auth/signUp.js

import User from "../../models/user.js";
import sendFinalResponse from "../../utils/sendFinalResponse.js";
import { ApiError } from "../../utils/apiErrors.js";
import passwordValidation from "../../utils/passwordValidation.js";
import { EMAIL_REGEX } from "../../constants/regex.js";

const signUp = async (req, res, next) => {
    try {
        const { name, password, email, phone_no, image  } = req.body;

        if (!name || !password  || !email || !phone_no) {
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

        const newUser = new User({
            name,
            email: normalizedEmail,
            password,
            phone_no,
            image,
           
        });

        console.log("New user:", newUser);

        const savedUser = await newUser.save();
        if (!savedUser) {
            throw new ApiError("User creation failed", 500, "User creation failed", true);
        }

        console.log("User created successfully:", savedUser);

        return sendFinalResponse(res, 200, true, "User created successfully");
    } catch (error) {
        console.error("Error in signUp:", error);
        next(error);
    }
}

export default signUp;
