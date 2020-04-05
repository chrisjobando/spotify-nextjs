import User from '../models/User';
import mongoDB from '../index';

export async function createId(tokens) {
  await mongoDB();
  
  return User.create({
    refresh: tokens.refresh_token,
    access: tokens.access_token,
  });
}

export async function findById(_id) {
  await mongoDB();

  return User.findOne({ _id });
}

export async function updateToken(authorization, access) {
  await mongoDB();

  return User.findByIdAndUpdate(authorization, {
    $set: { access: access },
  });
}
