// src/routes/auth.js

import express from "express";
import signUp from "../controllers/auth/signUp.js";
import signIn from "../controllers/auth/signIn.js";
import forgotPassword from '../controllers/auth/forgotPassword .js';
import resetPassword from '../controllers/auth/resetPassword.js';
import { sendOTPForReset } from '../controllers/auth/resetPassword.js';
import adminSignIn from '../controllers/auth/Admin/adminSignIn.js';
import  tokenAutorization  from "../middleware/tokenAuthorization.js";
import stats from "../controllers/auth/Admin/stats.js";
import registerComplaint from "../controllers/complaint.js";
import installationForm from "../controllers/installationForm.js";
import resolveComplaint from "../controllers/auth/Admin/resolveComplaint.js";
import approveInstallation from "../controllers/auth/Admin/approveInstallation.js";



const router = express.Router();


router.post("/signup", signUp);
router.post("/signIn", signIn);
router.post("/adminSignIn", adminSignIn);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);
router.post("/sendOTPForReset", sendOTPForReset);
router.get("/stats", stats);
router.use("/installationForm",tokenAutorization , installationForm);
router.use("/registerComplaint", tokenAutorization, registerComplaint);
router.use("/resolveComplaint", resolveComplaint)
router.use("/approveInstallation", approveInstallation )






export default router;