// uploadRoutes.js

import Image from '../../../models/image.js'; // Change from Profile to Image

const uploadProfile = async (req, res) => {
  try {
    const newImage = new Image({ // Change from Profile to Image
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });
    await newImage.save(); // Change from newProfile to newImage
    res.status(200).json({ message: 'Profile image uploaded successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload profile image' });
  }
};

export default uploadProfile;

