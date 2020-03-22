import jwt from 'jsonwebtoken';
import User from '../models/user';
import mongoDB from '../index';

export async function findOrCreate(oAuthData) {
  await mongoDB();

  return User.findOne({ oAuthId: oAuthData.id })
    .then(user => {
      if (user) {
        return Promise.resolve(user);
      } else {
        return User.create({
          oAuthId: oAuthData.id,
          oAuthData: oAuthData,
        });
      }
    })
    .then(user =>
      jwt.sign(
        {
          oAuthId: user.oAuthId,
          oAuthData: user.oAuthData,
        },
        process.env.JWT_KEY,
        {
          expiresIn: '7d',
        }
      )
    );
}

export async function findById(id) {
  await mongoDB();

  return User.findOne({ oAuthId: id });
}
