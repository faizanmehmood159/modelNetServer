// E:\React Native\Fyp\modelNetServer\src\routes\auth.js

import express from "express";
import signUp from "../controllers/auth/signUp.js";
import signIn from "../controllers/auth/signIn.js";
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
import multer from "multer";
import getLoggedInUserName from '../controllers/auth/getLoggedInUserName.js'
import forgetPassword from "../controllers/auth/forgetPassword.js";
import sendOtp from "../controllers/auth/sendOtp.js";
import processPayment from "../controllers/auth/paymentController.js";
import imageController from '../controllers/auth/imageController.js';



const router = express.Router();



router.post("/signup", signUp);
router.post("/signIn", signIn);
router.post("/adminSignIn", adminSignIn);
router.post("/forgetPassword", forgetPassword);
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
router.get("/getLoggedInUserName", tokenAuthorization, getLoggedInUserName)
router.post("/sendOtp", sendOtp);
router.post('/payment', tokenAuthorization, processPayment);
router.post('/upload', imageController.uploadImage);





export default router;