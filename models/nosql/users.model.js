const mongoose = require('mongoose');
const SCHEMA_NAME = require('./modelsNames');
const mongooseDelete = require('mongoose-delete');

const name = { type: String };
const age = { type: Number };
const email = { type: String, unique: true };
const password = { type: String };
const role = { type: ['user', 'admin'], default: 'user' };
const params = {
  name,
  age,
  email,
  password,
  role,
};
const userSchema = new mongoose.Schema(params, {
  timestamps: true,
  versionKey: false,
});
userSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model(SCHEMA_NAME.USERS, userSchema);
