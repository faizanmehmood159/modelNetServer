//config/sendEmail.js

import ENV from "./keys.js";
import sendGrid from "@sendgrid/mail";
sendGrid.setApiKey(ENV.SENDGRID_API_KEY);

const sendEmail = (email, otp) => {
  console.log(email, otp);
  // if (otpString.length == 6) {
  //   otp = "Hello, your OTP is " + otp + "  Do not share it with anyone else!";
  // }
  const msg = {
    to: email,
    from: {
      name: "ModelNet",
      email: "modelnet@comtechradix.com",
    },
    subject: "possibly",
    html: otp,
    text: "Possibly Notifications",
  };
  return sendGrid.send(msg);
};

export default sendEmail;
