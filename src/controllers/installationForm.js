//src/controllers/installationForm.js
import Installation from '../models/installation.js';

const installationForm = async (req, res) => {
  try {
    // Extract user ID from authenticated request
    const userId = req.user._id;

    // Extract data from request body
    const { name, email, phone_no, cnic, address } = req.body;

    // Create a new Installation instance with user ID
    const installation = new Installation({
      userId, // Include user ID in the installation data
      name,
      email,
      phone_no,
      cnic,
      address
    });

    // Save the installation data to the database
    await installation.save();

    // Send a success response
    return res.status(201).json({ success: true, message: 'Installation form submitted successfully' });
  } catch (error) {
    // Log and send a generic internal server error response in case of any error
    console.error('Error submitting installation form:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export default installationForm;
