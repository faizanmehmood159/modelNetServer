// src/controllers/auth/Admin/adminSignIn.js

// import { ApiError } from "../../../utils/apiErrors";

const adminSignIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if both email and password are provided
        if (!email || !password) {
            console.log("Invalid email or password:", email, password);
            throw new ApiError("Invalid Request", 400, "Email and password are required.");
        }

        
        if (email !== "modelNet@gmail.com" || password !== "ModelNet512") {
            throw new ApiError("Authentication Failed", 401, "Invalid email or password.");
        }
        console.log("Sign-in successful for email:");

        return res.status(200).json({
            success: true,
            message: "Sign-In successfully",
            admin: {
                email: email,
            },
        });
    }  catch (error) {
        console.error("Admin Signin Error:", error);
        next(error);
};

}
export default adminSignIn
