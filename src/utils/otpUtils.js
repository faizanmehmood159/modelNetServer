// utils/otpUtils.js
import nodemailer from 'nodemailer'; 
// Function to generate a random OTP (One-Time Password)
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Function to send OTP to a user's email
const sendOTP = async (email, otp) => {
  // Here you would implement the logic to send the OTP to the user's email
  // For example, using Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'faizanmehmood.dev@gmail.com', // Sender email address
        pass: 'Faizanehmood32949f' // Sender email password or application-specific password
      }
    });

    const mailOptions = {
      from: 'faizanmehmood.dev@gmail.com', // Sender address
      to: email, // Recipient address
      subject: 'Password Reset OTP', // Email subject
      text: `Your OTP for password reset is: ${otp}` // Email body
    };

    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Error sending OTP');
  }
};

export { generateOTP, sendOTP };
