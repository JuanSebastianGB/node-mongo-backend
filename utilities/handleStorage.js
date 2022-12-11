const multer = require('multer');

const destiny = `${__dirname}/../storage`;
const options = {
  destination: (req, file, callback) => callback(null, destiny),
  filename: (req, file, callback) => {
    const extension = file.originalname.split('.').pop();
    const filename = `file-${Date.now()}.${extension}`;
    callback(null, filename);
  },
};
const storage = multer.diskStorage(options);
const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
