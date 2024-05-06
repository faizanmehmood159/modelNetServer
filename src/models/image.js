// src/models/Image.js

import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  data: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("Image", imageSchema);

export default Image;
