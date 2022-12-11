const express = require('express');
const fs = require('fs');
const router = express.Router();

const CURRENT_PATH = __dirname;

const removeExtension = (fileName) => fileName.split('.').shift();

fs.readdirSync(CURRENT_PATH).map((file) => {
  if (file === 'index.js') return;
  const fileName = removeExtension(file);
  router.use(`/${fileName}`, require(`./${file}`));
});

module.exports = router;
