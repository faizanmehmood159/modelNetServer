import User from "../../../models/user.js"; // Import the User model
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import { ApiError } from "../../../utils/apiErrors.js";

const editUser = async (req, res, next) => {
    try {
        const { _id } = req.query; // Access user ID from route parameters
        const { name, phone_no } = req.query; // Access updated user data from request body

        if (!_id) {
            throw new ApiError("Missing userId", 400, "User ID is required for editing the user", true);
        }

        const user = await User.findById(_id);

        if (!user) {
            throw new ApiError("User not found", 404, "User not found", true);
        }

        // Update user data with the new values
        if (name) user.name = name;
        if (phone_no) user.phone_no = phone_no; 

        // Save the updated user
        await user.save();

        return sendFinalResponse(res, 200, true, "User updated successfully", user);
    } catch (error) {
        next(error);
    }
}

export default editUser;
