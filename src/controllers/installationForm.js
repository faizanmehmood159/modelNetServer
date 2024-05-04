import Installation from '../models/installation.js';
import sendFinalResponse from "../utils/sendFinalResponse.js";

const installationForm = async (req, res) => {
  try {
    // Extract user details from authenticated request
    const { _id: userId, name, email, } = req.user;

    // Extract data from request body
    const { phone_no, cnic, address } = req.body;

    // Create a new Installation instance with user ID
    const newInstallation = new Installation({
      userId, // Include user ID in the installation data
      name,
      email,
      phone_no,
      cnic,
      address
    });

    // Save the installation data to the database
    await newInstallation.save();

    // Send a success response with user ID
    return sendFinalResponse(res, 201, true, 'Installation form submitted successfully', {
      installation: newInstallation,
      user: req.user // Include user ID in the response
    });
  }  catch (error) {
    console.error("Error registering complaint:", error);
    next(error);
  }
};

export default installationForm;
