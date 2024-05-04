// src/routes/auth.js

import express from "express";
import signUp from "../controllers/auth/signUp.js";
import signIn from "../controllers/auth/signIn.js";
import forgotPassword from '../controllers/auth/forgotPassword .js';
import resetPassword from '../controllers/auth/resetPassword.js';
import { sendOTPForReset } from '../controllers/auth/resetPassword.js';
import adminSignIn from '../controllers/auth/Admin/adminSignIn.js';
import  tokenAuthorization  from "../middleware/tokenAuthorization.js";
import stats from "../controllers/auth/Admin/stats.js";
import registerComplaint from "../controllers/complaint.js";
import installationForm from "../controllers/installationForm.js";
import resolveComplaint from "../controllers/auth/Admin/resolveComplaint.js";
import approveInstallation from "../controllers/auth/Admin/approveInstallation.js";
import deleteUser from "../controllers/auth/Admin/deleteUser.js";
import changePassword from "../controllers/auth/changePassword.js";
import editUser from "../controllers/auth/Admin/editUser.js";
import changeName from "../controllers/auth/changeName.js";



const router = express.Router();


router.post("/signup", signUp);
router.post("/signIn", signIn);
router.post("/adminSignIn", adminSignIn);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);
router.post("/changePassword", tokenAuthorization, changePassword)
router.patch('/changeName', tokenAuthorization, changeName);
router.post("/sendOTPForReset", sendOTPForReset);
router.get("/stats", stats);
router.use("/installationForm",tokenAuthorization , installationForm);
router.use("/registerComplaint", tokenAuthorization, registerComplaint);
router.use("/resolveComplaint", resolveComplaint)
router.use("/approveInstallation", approveInstallation )
router.post("/deleteUser", deleteUser)
router.put("/editUser", editUser)






export default router;