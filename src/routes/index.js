//E:\React Native\Fyp\modelNetServer\src\routes\index.js

import express from "express";
import auth from "./auth.js";
import complaint from "./complaint.js";
import installationForm from "../models/installationForm.js";
const router = express.Router();
import { imageUpload } from "../middleware/imageUpload.js";



router.use("/auth", auth);
router.use("/complaint", complaint); 
router.use("/installationForm", installationForm)
router.post("/signup", imageUpload);



export default router;