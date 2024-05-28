import sendGrid from "@sendgrid/mail";
import ENV from "./keys.js";

sendGrid.setApiKey(ENV.SENDGRID_API_KEY);

const sendEmail = (email, content) => {
  const msg = {
    to: email,
    from: {
      name: "ModelNet",
      email: "possbly@comtechradix.com",
    },
    subject: "ModelNet",
    html: content,
    text: "ModelNet Notifications",
  };
  return sendGrid.send(msg);
};



export default  sendEmail ;
