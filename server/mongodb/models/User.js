import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  oAuthId: { type: Number, required: true },
  oAuthData: { type: Object, required: true },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
