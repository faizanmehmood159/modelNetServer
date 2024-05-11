import User from "../../../models/user.js";
import bcrypt from "bcryptjs";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import { ApiError } from "../../../utils/apiErrors.js";
import passwordValidation from "../../../utils/passwordValidation.js";

const forgetPassword = async (req, res, next) => {
    try {
        let { password, cPassword, otp } = req.body;

        // Check if password and cPassword are provided
        if (!password || !cPassword) {
            throw new ApiError("Invalid Details", 400, "Password and confirmed password are required", true);
        }

        // Validate password
        if (passwordValidation.match(password, cPassword) !== true) {
            throw new ApiError("Invalid Details", 400, `${passwordValidation.match(password, cPassword).error}`, true);
        }
        if (passwordValidation.length(password) !== true) {
            throw new ApiError("Invalid Details", 400, `${passwordValidation.length(password).error}`, true);
        }
        if (passwordValidation.strength(password) !== true) {
            throw new ApiError("Invalid Details", 400, `${passwordValidation.strength(password).error}`, true);
        }

        //  Update password in db
        const user = await User.findOneAndUpdate(
            { otp },
            { $set: { otp: null, password: await bcrypt.hash(password, 12) } },
            { new: true }
        );

        // Check if user exists with the provided OTP
        if (!user) {
            throw new ApiError("Invalid Details", 400, "Incorrect OTP", true);
        }

        return sendFinalResponse(res, 200, true, "Password updated successfully");

    } catch (error) {
        next(error);
    }
};

export default forgetPassword;
