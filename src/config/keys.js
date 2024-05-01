//config/keys.js

import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config({ path: "./.env.local" });

const config = {
  PORT: process.env.PORT || 4000,
  DATABASE: {
    URL: process.env.MONGODB_URL,
  },
  JWT_SECRET: process.env.JWT_SECRET,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  // AWS: {
  //   ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  //   SECRET_KEY: process.env.AWS_SECRET_KEY,
  //   REGION: process.env.AWS_REGION,
  //   BUCKET_NAME: process.env.S3_BUCKET_NAME
  // }
};

export default config;
