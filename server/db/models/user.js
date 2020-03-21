const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  oAuthId: { type: Number, required: true },
  oAuthData: { type: Object, required: true },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
