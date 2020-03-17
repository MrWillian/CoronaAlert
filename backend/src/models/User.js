const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: String,
  age: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },


}, {
  timestamps: true,
});

module.exports = model('User', UserSchema);
