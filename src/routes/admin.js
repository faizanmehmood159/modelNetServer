// import express from "express";
// import tokenAuthorizationAdmin from "../middleware/tokenAuthorizationAdmin.js";
// import signIn from "../controllers/admin/signIn.js";
// import addCompanyDetails from "../controllers/admin/addCompanyDetails.js";
// import updateCompanyDetails from "../controllers/admin/updateCompanyDetails.js";
// import deleteCompanyDetails from "../controllers/admin/deleteCompanyDetails.js";
// import approveAppintments from "../controllers/admin/approveAppintments.js";
// import getAppointments from "../controllers/admin/getAppointments.js"
// import getCompanyDetails from "../controllers/admin/getCompanyDetails.js"
// import getUnApproveCompany from "../controllers/admin/getUnApproveCompany.js";
// import approveCompany from "../controllers/admin/approveCompany.js";
// import postJob from "../controllers/admin/postJob.js";
// import getPostedJob from "../controllers/admin/getPostedJob.js";
// import updatePostJob from "../controllers/admin/updatePostJob.js";
// import finishAppointment from "../controllers/admin/finishAppointment.js";
// import autoAcceptAppointment from "../controllers/admin/autoAcceptAppointment.js";
// import titleSubtitle from "../controllers/admin/title/titleSubtitle.js";
// import getFinishedAppointments from "../controllers/admin/getFinishedAppointments.js";
// import stats from "../controllers/auth/Admin/stats.js";
// import getCompanyUsers from "../controllers/admin/getCompanyUsers.js";
// import updateProfile from "../controllers/admin/updateProfile.js";
// import getProfile from "../controllers/admin/getProfile.js";
// import getApprovedPendingCompany from "../controllers/admin/getApprovedPendingCompany.js";
// import companyStats from "../controllers/admin/companyStats.js";
// import changePassword from "../controllers/admin/changePassword.js";
// import sendOtp from "../controllers/admin/sendOtp.js";
// import forgetPassword from "../controllers/admin/forgetPassword.js";
// import getUsers from "../controllers/admin/getUsers.js";
// import getAllCompanies from "../controllers/admin/getAllCompanies.js";
// import deleteCompany from "../controllers/admin/deleteCompany.js";
// import setTopRated from "../controllers/admin/setTopRated.js";
// import getAllCompanyDetails from "../controllers/admin/getAllCompanyDetails.js";
// import deletePostJob from "../controllers/admin/deletePostJob.js";
// import updateCompanyUsers from "../controllers/admin/updateCompanyUsers.js";
// import deleteCompanyUsers from "../controllers/admin/deleteCompanyUsers.js";
// import enableDisableJob from "../controllers/admin/enableDisableJob.js";

// import multer from "multer";


// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const router = express.Router();

// router.post("/signup", signUp);
// router.post("/signIn", signIn);
// router.post("/addCompanyDetails", tokenAuthorizationAdmin, upload.single('video'), addCompanyDetails);
// router.post("/updateCompanyDetails", tokenAuthorizationAdmin, upload.single('video'), updateCompanyDetails);
// router.post("/deleteCompanyDetails", tokenAuthorizationAdmin, deleteCompanyDetails);
// router.post("/approveAppintments", tokenAuthorizationAdmin, approveAppintments);
// router.get("/getAppointments", tokenAuthorizationAdmin, getAppointments);
// router.get("/getCompanyDetails", tokenAuthorizationAdmin, getCompanyDetails);
// router.get("/getUnApproveCompany", tokenAuthorizationAdmin, getUnApproveCompany);
// router.post("/approveCompany", tokenAuthorizationAdmin, approveCompany);
// router.post("/postJob", tokenAuthorizationAdmin, upload.single('video'), postJob);
// router.get("/getPostedJob", tokenAuthorizationAdmin, getPostedJob);
// router.post("/updatePostJob", tokenAuthorizationAdmin, upload.single('video'), updatePostJob);
// router.post("/finishAppointment", tokenAuthorizationAdmin, finishAppointment);
// router.post("/autoAcceptAppointment", tokenAuthorizationAdmin, autoAcceptAppointment);
// router.post("/titleSubtitle", tokenAuthorizationAdmin, titleSubtitle);
// router.get("/getFinishedAppointments", tokenAuthorizationAdmin, getFinishedAppointments);
// router.get("/stats", tokenAuthorizationAdmin, stats);
// router.get("/getCompanyUsers", tokenAuthorizationAdmin, getCompanyUsers);
// router.post("/updateProfile", tokenAuthorizationAdmin, updateProfile);
// router.get("/getProfile", tokenAuthorizationAdmin, getProfile);
// router.get("/getApprovedPendingCompany", tokenAuthorizationAdmin, getApprovedPendingCompany);
// router.get("/companyStats", tokenAuthorizationAdmin, companyStats);
// router.post("/changePassword", changePassword);
// router.post("/sendOtp", sendOtp);
// router.post("/forgetPassword", forgetPassword);
// router.get("/getUsers", tokenAuthorizationAdmin, getUsers);
// router.get("/getAllCompanies", tokenAuthorizationAdmin, getAllCompanies);
// router.get("/deleteCompany", tokenAuthorizationAdmin, deleteCompany);
// router.get("/setTopRated", tokenAuthorizationAdmin, setTopRated);
// router.get("/getAllCompanyDetails", tokenAuthorizationAdmin, getAllCompanyDetails);
// router.get("/deletePostJob", tokenAuthorizationAdmin, deletePostJob);
// router.post("/updateCompanyUsers", tokenAuthorizationAdmin, updateCompanyUsers);
// router.get("/deleteCompanyUsers", tokenAuthorizationAdmin, deleteCompanyUsers);
// router.post("/enableDisableJob", tokenAuthorizationAdmin, enableDisableJob);



// export default router;
