// controllers/messageController.js

const axios = require('axios');

const sendMessageToChatwoot = async (req, res) => {
  try {
    const { message } = req.body;

    // Forward message to Chatwoot API
    const response = await axios.post('https://your-chatwoot-api-url.com/api/v1/messages', {
      content: message,
      // Add other message parameters as needed
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

export default  sendMessageToChatwoot;
