import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  oAuthData: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
