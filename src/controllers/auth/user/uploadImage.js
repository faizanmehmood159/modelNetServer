import Image from "../../../models/image.js";

const uploadImage = async (req, res) => {
    try {
        const userId = req.query.userId;
        
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }
        
        const image = new Image({
            user: userId, 
            imageUrl: req.file.path         });

        // Save the image data
        await image.save();

        // Respond with success message
        res.json({ message: 'Profile image uploaded successfully', image });
    } catch (error) {
        console.error('Error uploading profile image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default uploadImage;
