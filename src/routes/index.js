//E:\React Native\Fyp\modelNetServer\src\routes\index.js

import express from "express";
import auth from "./auth.js";
import installationForm from "../controllers/installationForm.js";
const router = express.Router();
import { imageUpload } from "../middleware/imageUpload.js";
import registerComplaint from "../controllers/complaint.js";



router.use("/auth", auth);
router.use("/complaint", registerComplaint);
router.use("/installationForm", installationForm)
router.post("/signup", imageUpload);



export default router;