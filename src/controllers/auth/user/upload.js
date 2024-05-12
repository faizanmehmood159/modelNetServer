import multer from 'multer';
import path from 'path';
import User from '../../../models/user.js';

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB limit
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('profileImage');

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images only!');
  }
}

// Upload profile image
const uploadProfileImage = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ error: 'No file selected!' });
      } else {
        try {
          // Update user's profileImage field with file path
          const user = await User.findById(userId); // Assuming you have userId available
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }

          user.profileImage = req.file.path;
          await user.save();

          res.status(200).json({ message: 'Profile image uploaded successfully!', file: req.file });
        } catch (error) {
          console.error('Error uploading profile image:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
    }
  });
};

export default uploadProfileImage;