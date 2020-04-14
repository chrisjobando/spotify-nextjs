import User from '../models/User';
import mongoDB from '../index';

export async function createId(refresh) {
  await mongoDB();

  return User.create({
    refresh,
    clean: false,
  });
}

export async function deleteId(id) {
  await mongoDB();

  return User.findByIdAndRemove(id);
}

export async function findById(id) {
  await mongoDB();

  if (!id) {
    return Promise.reject(new Error('No cookies passed'));
  }

  return User.findById(id).then(user => {
    if (!user) {
      return Promise.reject(new Error('User does not exist'));
    }
    return user;
  });
}

export async function updateClean(authorization, clean) {
  await mongoDB();

  return User.findByIdAndUpdate(authorization, {
    $set: { clean: clean },
  });
}
