import Installation from '../../../models/installation.js';
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const installationForm = async (req, res, next) => { // Add 'next' as a parameter
  try {
    const { _id: userId, name, email } = req.user;
    const { phone_no, cnic, address, packages } = req.body;

    const newInstallation = new Installation({
      userId, 
      name,
      email,
      phone_no,
      cnic,
      address,
      packages 
    });

    await newInstallation.save();

    return sendFinalResponse(res, 201, true, 'Installation form submitted successfully', {
      installation: newInstallation,
      user: req.user 
    });
  } catch (error) {
    console.error("Error registering complaint:", error);
    return next(error); // Use 'next' to handle errors
  }
};

export default installationForm;
