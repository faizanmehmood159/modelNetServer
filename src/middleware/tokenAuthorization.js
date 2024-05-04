// middleware/tokenAuthorization.js

import User from "../models/user.js";
import sendFinalResponse from "../utils/sendFinalResponse.js";
import ENV from "../config/keys.js";
import jwt from "jsonwebtoken";

const { verify } = jwt;

const tokenAuthorization = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ error: 'Unauthorized: Token is required' });
        }
        const token = authorization.split(" ")[1];
        const decodedToken = verify(token, ENV.JWT_SECRET);
        const db = await User.findOne({ _id: decodedToken._id });
        if (!db) {
            return sendFinalResponse(res, 400, false, "User not found");
        }
        req.user = db;
        next();
    } catch (error) {
        console.error('Token Authorization Error:', error);
        return sendFinalResponse(res, 400, false, "User not found", error);
    }
};

export default tokenAuthorization;
