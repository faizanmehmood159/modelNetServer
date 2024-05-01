// src/routes/auth.js

import express from "express";
import signUp from "../controllers/auth/signUp.js";
import signIn from "../controllers/auth/signIn.js";
import forgotPassword from '../controllers/auth/forgotPassword .js';
import resetPassword from '../controllers/auth/resetPassword.js';
import { sendOTPForReset } from '../controllers/auth/resetPassword.js';


const router = express.Router();


router.post("/signup", signUp);
router.post("/signIn", signIn);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);
router.post("/sendOTPForReset", sendOTPForReset);

export default router;