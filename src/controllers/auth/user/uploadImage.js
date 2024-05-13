// src/controllers/userController.js
import User from "../../../models/user.js";

// Controller to handle image upload
const uploadImage = async (req, res) => {
  try {
    const { userId} = req.body;

    // Find the user by userId or create a new one
    let user = await User.findOne({ userId });
    if (!user) {
      user = new User({ userId });
    }

    // Update the user's image data
    user.profileImage = "string"

    // Save the user to the database
    await user.save();

    res.status(200).send('Image uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

export default uploadImage;
