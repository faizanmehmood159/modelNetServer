// backend/controllers/imageController.js

import Image from "../../models/image";





const uploadImage = async (req, res) => {
    try {
        // Save image to database
        const newImage = await Image.create(req.body);

        // Respond with success message
        res.status(201).json({ success: true, message: 'Image uploaded successfully', image: newImage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default uploadImage;