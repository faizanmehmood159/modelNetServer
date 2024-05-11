// controllers/auth/changeName.js
// import user from '../../models/user.js';
import sendFinalResponse from '../../../utils/sendFinalResponse.js';
import { ApiError } from '../../../utils/apiErrors.js';

const changeName = async (req, res, next) => {
    try {
        const { newName , newPhoneNo} = req.body;
        if (!newName || !newPhoneNo) {
            throw new ApiError('Invalid Request', 400, 'New name is required');
        }

        // Retrieve authenticated user
        const user = req.user;

        // Update user's name in the database
        user.name = newName;
        user.phone_no = newPhoneNo
        await user.save();

        sendFinalResponse(res, 200, true, 'Name updated successfully');
    } catch (error) {
        next(error);
    }
};

export default changeName;
