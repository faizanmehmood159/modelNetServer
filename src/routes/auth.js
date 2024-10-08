// E:\React Native\Fyp\modelNetServer\src\routes\auth.js

import express from "express";
import adminSignIn from '../controllers/auth/Admin/adminSignIn.js';
import stats from "../controllers/auth/Admin/stats.js";
import resolveComplaint from "../controllers/auth/Admin/resolveComplaint.js";
import approveInstallation from "../controllers/auth/Admin/approveInstallation.js";
import deleteUser from "../controllers/auth/Admin/deleteUser.js";
import editUser from "../controllers/auth/Admin/editUser.js";
import getAllBills from "../controllers/auth/Admin/getAllBills.js"
import approveBill from "../controllers/auth/Admin/approveBills.js"
import  tokenAuthorization  from "../middleware/tokenAuthorization.js";

import signUp from "../controllers/auth/user/signUp.js";
import signIn from "../controllers/auth/user/signIn.js";
import resetPassword from '../controllers/auth/user/resetPassword.js';
import { sendOTPForReset } from '../controllers/auth/user/resetPassword.js';
import registerComplaint from "../controllers/auth/user/complaint.js";
import installationForm from "../controllers/auth/user/installationForm.js";
import changePassword from "../controllers/auth/user/changePassword.js";
import changeName from "../controllers/auth/user/changeName.js";
import getLoggedInUserName from '../controllers/auth/user/getLoggedInUserName.js'
import forgetPassword from "../controllers/auth/user/forgetPassword.js";
import sendOtp from "../controllers/auth/user/sendOtp.js";
import packagesfetch from "../controllers/auth/user/packagesfetch.js"
import confirmPayment  from "../controllers/auth/user/confirmPayment .js"
import getBills from "../controllers/auth/user/getBills.js";
import uploadProfileImage from "../controllers/auth/user/uploadProfileImage.js";
import getProfileImage from "../controllers/auth/user/getProfileImag.js";
import verifyEmail from "../controllers/auth/user/verifyEmail.js";

const router = express.Router();
router.use(express.urlencoded({ extended: false }));



//User side
router.post("/signup", signUp);
router.post("/signIn", signIn);
router.post("/forgetPassword", forgetPassword);
router.post('/resetPassword', resetPassword);
router.post("/changePassword", tokenAuthorization, changePassword)
router.patch('/changeName', tokenAuthorization, changeName);
router.post("/sendOTPForReset", sendOTPForReset);
router.use("/installationForm",tokenAuthorization , installationForm);
router.use("/registerComplaint", tokenAuthorization, registerComplaint);
router.get("/getLoggedInUserName", tokenAuthorization, getLoggedInUserName);
router.get('/getBill/',tokenAuthorization, packagesfetch);  
router.post("/confirmPayment", tokenAuthorization, confirmPayment );
router.get("/allBills",tokenAuthorization, getBills)
router.post("/uploadProfileImage", tokenAuthorization, uploadProfileImage);
router.get("/getProfileImage", tokenAuthorization, getProfileImage)
router.get("/verify/:token", verifyEmail);



//Admin side
router.post("/adminSignIn", adminSignIn);
router.get("/stats", stats);
router.use("/resolveComplaint", resolveComplaint)
router.use("/approveInstallation", approveInstallation )
router.post("/deleteUser", deleteUser)
router.put("/editUser", editUser)
router.post("/sendOtp", sendOtp);
router.put("/bills", approveBill);
router.get("/getAllBills", getAllBills);
router.put("/bills", approveBill);



export default router;