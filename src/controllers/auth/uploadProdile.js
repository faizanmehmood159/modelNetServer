// services/uploadService.js
import multer from 'multer';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage }).single('image');

// Handle file upload logic
const uploadFile = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'File upload failed' });
    }
    next();
  });
};
export default upload;