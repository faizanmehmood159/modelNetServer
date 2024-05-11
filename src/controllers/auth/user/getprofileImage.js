import Profile from '../../../models/image.js';

const getProfileImage = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId);

    if (!profile) {
      return res.status(404).json({ error: 'Profile image not found' });
    }

    res.set('Content-Type', profile.image.contentType);
    res.send(profile.image.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve profile image' });
  }
};

export default getProfileImage;
