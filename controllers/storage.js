const { matchedData } = require('express-validator');
const storageModel = require('../models/nosql/storage.model');
const fs = require('fs');
const { handleHttpError } = require('../utilities/handleError');

const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    res.json(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};

const createItem = async (req, res) => {
  try {
    const {
      file: { filename },
    } = req;
    const fileData = {
      filename,
      url: `${process.env.PUBLIC_URL}/${filename}`,
    };
    const data = await storageModel.create(fileData);
    return res.json(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS');
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    const { filename } = data;
    const filePath = `${MEDIA_PATH}/${filename}`;
    // fs.unlinkSync(filePath);
    await storageModel.delete({ _id: id });
    return res.json({ filePath, deleted: 'Deleted Successfully' });
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_DELETE_ITEMS');
  }
};

module.exports = { createItem, getItem, getItems, deleteItem };
