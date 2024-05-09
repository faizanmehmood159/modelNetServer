// backend/models/Image.js
import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    image: {
      data: Buffer,
      contentType: String
    }
  });

const Image = mongoose.model("Image", imageSchema);

export default Image;
