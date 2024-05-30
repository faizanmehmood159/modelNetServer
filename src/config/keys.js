//config/keys.js

import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config({ path: "./.env.local" });

const config = {
  PORT: process.env.PORT || 8000,
  DATABASE: {
    URL: process.env.MONGODB_URL,
  },
  JWT_SECRET: process.env.JWT_SECRET,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  
};

export default config;
