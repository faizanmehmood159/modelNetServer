import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const config = {
  PORT: process.env.PORT || 8000,
  DATABASE: {
    URL: process.env.MONGODB_URL,
  },
  JWT_SECRET: process.env.JWT_SECRET,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  STRIPE_API_KEY: process.env.STRIPE_API_KEY,
  STRIPE_API_SECRET: process.env.STRIPE_API_SECRET,
};

export default config;
