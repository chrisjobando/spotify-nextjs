import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  refresh: { type: String, required: true },
  access: { type: String, required: true },
  clean: { type: Boolean, required: true },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
