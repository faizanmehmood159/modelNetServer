// src/routes/complaint.js

import express from "express";
import { saveComplaint } from "../controllers/complaint.js";

const router = express.Router();

router.post("/", saveComplaint);

export default router;
