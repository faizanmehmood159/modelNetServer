
import User from "../../../models/user.js"; // Import the User model
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import { ApiError } from "../../../utils/apiErrors.js";

const deleteUser = async (req, res, next) => {
    try {

        
        const {_id}  = req.query; // Access user ID from route parameters
        
        if (!_id) {
            throw new ApiError("Missing userId", 400, "User ID is required for deleting the user", true);
        }

        const user = await User.findById({_id});

        if (!user) {
            throw new ApiError("User not found", 404, "User not found", true);
        }

        const deletedUser = await User.findByIdAndDelete({_id});

        return sendFinalResponse(res, 200, true, "User deleted successfully", deletedUser);
    } catch (error) {
        next(error);
    }
}

export default deleteUser;
