import User from '../models/user';
import mongoDB from '../index';

export async function createId(tokens) {
  await mongoDB();
  return User.create({
    _id: tokens.refresh_token,
    access: tokens.access_token,
  });
}

export async function findById(_id) {
  await mongoDB();

  return User.findOne({ _id });
}
