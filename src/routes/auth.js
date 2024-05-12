// E:\React Native\Fyp\modelNetServer\src\routes\auth.js

import express from "express";
import signUp from "../controllers/auth/user/signUp.js";
import signIn from "../controllers/auth/user/signIn.js";
import resetPassword from '../controllers/auth/user/resetPassword.js';
import { sendOTPForReset } from '../controllers/auth/user/resetPassword.js';
import adminSignIn from '../controllers/auth/Admin/adminSignIn.js';
import  tokenAuthorization  from "../middleware/tokenAuthorization.js";
import stats from "../controllers/auth/Admin/stats.js";
import registerComplaint from "../controllers/auth/user/complaint.js";
import installationForm from "../controllers/auth/user/installationForm.js";
import resolveComplaint from "../controllers/auth/Admin/resolveComplaint.js";
import approveInstallation from "../controllers/auth/Admin/approveInstallation.js";
import deleteUser from "../controllers/auth/Admin/deleteUser.js";
import changePassword from "../controllers/auth/user/changePassword.js";
import editUser from "../controllers/auth/Admin/editUser.js";
import changeName from "../controllers/auth/user/changeName.js";
import multer from "multer";
import getLoggedInUserName from '../controllers/auth/user/getLoggedInUserName.js'
import forgetPassword from "../controllers/auth/user/forgetPassword.js";
import sendOtp from "../controllers/auth/user/sendOtp.js";
import getprofileImage from "../controllers/auth/user/getprofileImage.js";
import approveBill from '../controllers/auth/Admin/approveBill.js'
import packagesfetch from "../controllers/auth/user/packagesfetch.js"
import confirmPayment  from "../controllers/auth/user/confirmPayment .js"
import uploadProfileImage from "../controllers/auth/user/upload.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
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
router.post("/confirmPayment", tokenAuthorization, confirmPayment )
router.post('/upload',tokenAuthorization, uploadProfileImage);




//Admin side
router.post("/adminSignIn", adminSignIn);
router.get("/stats", stats);
router.use("/resolveComplaint", resolveComplaint)
router.use("/approveInstallation", approveInstallation )
router.post("/deleteUser", deleteUser)
router.put("/editUser", editUser)
router.post("/sendOtp", sendOtp);
router.get("/profileImage/:profileId", tokenAuthorization, getprofileImage);
router.put("/bills", approveBill);

export default router;