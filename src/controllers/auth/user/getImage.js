import Image from "../../../models/image.js";


const getImage = async (req, res) => {
    try {
        const userId = req.body.userId;
        
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }
        
        const image = await Image.findOne({ user: userId });

        if (!image) {
            return res.status(404).json({ error: 'Image not found for the user' });
        }

        // Access the imageUrl property from the image object
        const imageUrl = image.imageUrl;

        res.json({ imageUrl });
    } catch (error) {
        console.error('Error retrieving image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default getImage;
