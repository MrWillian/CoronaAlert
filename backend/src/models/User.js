const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  hasCovid: { 
    type: Boolean,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = model('User', UserSchema);
