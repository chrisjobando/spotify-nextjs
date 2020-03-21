import User from '../models/user';
import mongoDB from '../index';

export async function findOrCreate(oAuthData) {
  await mongoDB();

  try {
    const user = await User.findOne({ oAuthId: oAuthData.id });
    if (!user) {
      const newUser = new User({
        oAuthId: oAuthData.id,
        oAuthData: oAuthData,
      });
      await newUser.save();
      return newUser;
    }
    return user;
  } catch (e) {
    return Error('User not found');
  }
}

export async function findById(id) {
  return User.findOne({ oAuthId: id });
}
