// src/controllers/installationForm.js

import Installation from '../models/installation.js';

const submitInstallationForm = async (req, res) => {
  try {
    const { name, email, phone_no, cnic, address } = req.body;

    // Assuming User model is imported somewhere else
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ success: false, message: 'User not found with provided email' });
    }

    const installation = new Installation({
      name,
      email: existingUser.email,
      phone_no: existingUser.phone_no,
      cnic,
      address
    });

    await installation.save();

    return res.status(201).json({ success: true, message: 'Installation form submitted successfully' });
  } catch (error) {
    console.error('Error submitting installation form:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export default submitInstallationForm;
