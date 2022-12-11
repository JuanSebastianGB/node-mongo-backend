const storageModel = require('../models/nosql/storage.model');

const createItem = async (req, res) => {
  const {
    file: { filename },
  } = req;
  const fileData = {
    filename,
    url: `${process.env.PUBLIC_URL}/${filename}`,
  };
  const data = await storageModel.create(fileData);
  return res.json(data);
};

module.exports = createItem;
