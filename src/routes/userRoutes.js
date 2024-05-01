// routes/userRoutes.js

import express from 'express';
import User from '../models/user.js';
import tokenAuthorization from '../middleware/tokenAuthorization.js';

const router = express.Router();

router.get('/user', tokenAuthorization, async (req, res) => {
    try {
        // User is authenticated, you can access req.user to get user details
        res.json(req.user);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
