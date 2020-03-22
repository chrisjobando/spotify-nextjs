import jwt from 'jsonwebtoken';
import User from '../models/user';
import mongoDB from '../index';

export async function findOrCreate(oAuthData) {
  await mongoDB();

  return User.findOne({ oAuthData: oAuthData })
    .then(user => {
      if (user) {
        return Promise.resolve(user);
      } else {
        return User.create({
          oAuthData: oAuthData,
        });
      }
    })
    .then(user =>
      jwt.sign(
        {
          oAuthData: user.oAuthData,
        },
        process.env.JWT_KEY,
        {
          expiresIn: '7d',
        }
      )
    );
}

export async function findById(oAuthData) {
  await mongoDB();

  return User.findOne({ oAuthData: oAuthData });
}
