// src/controllers/auth/uploadProfilePicture.js

import Image from "../../models/image";

const uploadProfilePicture = async (req, res) => {
  try {
    const { buffer, mimetype } = req.file;

    // Create a new document in MongoDB
    const newImage = new Image({
      data: buffer,
      contentType: mimetype,
    });

    // Save the image to the database
    await newImage.save();

    res.json({ success: true, message: "Profile picture uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to upload profile picture" });
  }
};

export default uploadProfilePicture;
