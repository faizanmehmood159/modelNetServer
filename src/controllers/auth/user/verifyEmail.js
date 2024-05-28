import sendGrid from "@sendgrid/mail";
import ENV from "../../../config/keys.js";

sendGrid.setApiKey(ENV.SENDGRID_API_KEY);

const sendVerificationEmail = async (email, content) => {
  const msg = {
    to: email,
    from: {
      name: "ModelNet",
      email: "possbly@comtechradix.com",
    },
    subject: "Email Verification",
    html: content,
    text: "ModelNet Notifications",
  };

  try {
    await sendGrid.send(msg);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send verification email");
  }
};

export default sendVerificationEmail;
