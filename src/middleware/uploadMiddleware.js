
//E:\React Native\Fyp\modelNetServer\src\middleware\uploadMiddleware.js
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Specify the filename
  }
});

// Create the upload middleware instance
const upload = multer({ storage: storage });

export default  upload;
