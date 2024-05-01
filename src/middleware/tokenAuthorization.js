//middleware/tokenAuthorization.js

import User from "../models/user.js"
import sendFinalResponse from "../utils/sendFinalResponse.js";
import ENV from "../config/keys.js";
import jwt from "jsonwebtoken";
const { verify } = jwt;

// middleware/tokenAuthorization.js
const tokenAuthorization = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ error: 'Unauthorized: Token is required' });
        }
        const token = authorization.split(" ")[1];
        try {
            const decodedToken = jwt.verify(token, ENV.JWT_SECRET);
            const dbUser = await User.findById(decodedToken._id);
            if (!dbUser) {
                return res.status(401).json({ error: 'Unauthorized: User not found' });
            }
            req.user = dbUser;
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
    } catch (error) {
        console.error('Token Authorization Error:', error);
        next(error);
    }
}

export default tokenAuthorization;