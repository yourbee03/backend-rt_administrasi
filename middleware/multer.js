// middleware/multer.js
const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Direktori untuk menyimpan file yang diupload
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Nama file unik
  },
});

// Inisialisasi multer
const upload = multer({ storage });

module.exports = upload;
