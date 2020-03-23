import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  _id: { type: String, required: true },
  access: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
