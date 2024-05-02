// src/routes/complaint.js

import express from "express";
import registerComplaint from "../controllers/complaint.js";
import tokenAuthorization from '../middleware/tokenAuthorization.js'; // Import authentication middleware if needed

const router = express.Router();

// Route for registering a complaint
router.post("/", tokenAuthorization, registerComplaint);

export default router;
