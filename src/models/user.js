// src/models/user.js

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";
import ENV from "../config/keys.js";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: false,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid email format",
      },
    },
    phone_no: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    otp: {
      type: Number,
    },
    profileImage: {
      type: String,
    },
    
    uploadedAt: { 
      type: Date, 
      default: Date.now 
    },
    
  },

  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, ENV.JWT_SECRET);
};

const User = mongoose.model("User", userSchema);

export default User;
