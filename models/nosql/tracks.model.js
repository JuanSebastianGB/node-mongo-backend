const mongoose = require('mongoose');
const SCHEMA_NAME = require('./modelsNames');

const coverValidation = {
  validator: (req) => true,
  message: 'ERROR_URL',
};

const name = { type: String };
const album = { type: String };
const cover = { type: String, validate: coverValidation };
const artist = {
  name: { type: String },
  nickname: { type: String },
  nationality: { type: String },
};
const duration = { start: { type: Number }, end: { type: Number } };
const mediaId = { type: String };
const properties = {
  name,
  album,
  cover,
  artist,
  duration,
  mediaId,
};
const schemaConfig = { timestamps: true, versionKey: false };
const tracksSchema = new mongoose.Schema(properties, schemaConfig);

module.exports = mongoose.model(SCHEMA_NAME.TRACKS, tracksSchema);
