const mongoose = require('mongoose');
const SCHEMA_NAME = require('./modelsNames');

const url = { type: String };
const filename = { type: String };
const params = {
  url,
  filename,
};
const storageSchema = new mongoose.Schema(params, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model(SCHEMA_NAME.STORAGES, storageSchema);
