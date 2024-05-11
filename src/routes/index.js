// E:\React Native\Fyp\modelNetServer\src\routes\index.js
import express from "express";
import auth from "./auth.js";
// import { imageUpload } from "../middleware/imageUpload.js";
import getAllComplaints from "../controllers/auth/Admin/getAllComplaints.js"; // Import the controller
import getAllInstallations from "../controllers/auth/Admin/getAllInstallations.js";
import getAllUsers from "../controllers/auth/Admin/getAllUsers.js";

const router = express.Router();

router.use("/auth", auth);
// router.post("/signup", imageUpload);
router.use("/getAllComplaints", getAllComplaints); 
router.use("/getInstallations", getAllInstallations)
router.use("/getAllUsers", getAllUsers);



// router.post('./createBill', createBill);
// router.put('/approvedBill', approvedBill)


export default router;