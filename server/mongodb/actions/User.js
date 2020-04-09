import User from '../models/User';
import mongoDB from '../index';

export async function createId(tokens) {
  await mongoDB();

  return User.create({
    refresh: tokens.refresh_token,
    access: tokens.access_token,
    clean: false,
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

export async function updateClean(authorization, clean) {
  await mongoDB();

  return User.findByIdAndUpdate(authorization, {
    $set: { clean: clean },
  });
}
