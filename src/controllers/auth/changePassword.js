import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import sendFinalResponse from "../../utils/sendFinalResponse.js";
import { ApiError } from "../../utils/apiErrors.js";
import passwordValidation from "../../utils/passwordValidation.js";


const changePassword = async (req, res, next) => {

    try {
        let { oldPassword, newPassword, confirmNewPassword } = req.body;

        // Check if all required fields are present
        if (!oldPassword || !newPassword || !confirmNewPassword) {
            throw new ApiError("Invalid Details", 400, "Required fields are missing", true);
        }

        // Validate if new password matches the confirmation
        if (newPassword !== confirmNewPassword) {
            throw new ApiError("Invalid Details", 400, "New password and confirm password do not match", true);
        }

        // Perform additional password validation
        if (!passwordValidation.match(newPassword, confirmNewPassword)) {
            throw new ApiError("Invalid Details", 400, `${passwordValidation.match(newPassword, confirmNewPassword).error}`, true);
        }
        if (!passwordValidation.length(newPassword)) {
            throw new ApiError("Invalid Details", 400, `${passwordValidation.length(newPassword).error}`, true);
        }
        if (!passwordValidation.strength(newPassword)) {
            throw new ApiError("Invalid Details", 400, `${passwordValidation.strength(newPassword).error}`, true);
        }

        // Retrieve user by email (assuming email is unique)
        const user = await User.findOne({ email: req.user.email });

        // Check if old password matches the stored password
        const passwordMatch = await bcrypt.compare(oldPassword, user.password);

        if (!passwordMatch) {
            throw new ApiError("Invalid Details", 400, "Old password is incorrect", true);
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        // Update user's password in the database
        const changed = await User.updateOne(
            { email: req.user.email },
            {
                $set: {
                    password: hashedPassword
                }
            }
        );

        if (!changed) {
            throw new ApiError("Invalid Details", 400, "Failed to update password", true);
        }

        return sendFinalResponse(res, 200, true, "Password updated successfully");

    } catch (error) {
        next(error);
    }

};

export default changePassword;
