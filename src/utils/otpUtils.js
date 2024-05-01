//E:\React Native\Fyp\modelNetServer\src\utils\otpUtils.js
import nodemailer from 'nodemailer'; 
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOTP = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'faizanmehmood.dev@gmail.com',
        pass: 'Faizanehmood32949f' 
      }
    });

    const mailOptions = {
      from: 'faizanmehmood.dev@gmail.com', 
      to: email, 
      subject: 'Password Reset OTP', 
      text: `Your OTP for password reset is: ${otp}` 
        };

    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Error sending OTP');
  }
};

export { generateOTP, sendOTP };
