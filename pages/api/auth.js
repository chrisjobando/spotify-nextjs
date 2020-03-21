import nextConnect from 'next-connect';
import jwt from 'jsonwebtoken';

import passport from 'passport';
import { Strategy } from 'passport-spotify';
import userService from '../../server/db/services/user';

const jwtKey = process.env.JWT_KEY;
const handler = nextConnect();

passport.use(
  new Strategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/spotify/callback',
    },

    function(accessToken, refreshToken, profile, done) {
      userService.findOrCreate(profile);
      return done(null, profile);
    }
  )
);

handler.get(
  '/spotify',
  (req, res, next) => {
    const { redirectTo } = req.query;
    const state = JSON.stringify({ redirectTo });
    const authenticator = passport.authenticate('spotify', {
      scope: [],
      state,
      session: true,
    });
    authenticator(req, res, next);
  },
  (req, res, next) => {
    next();
  }
);

handler.get(
  '/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res, next) => {
    const token = jwt.sign({ id: req.user.id }, jwtKey, {
      expiresIn: 60 * 60 * 24 * 1000,
    });
    req.logIn(req.user, function(err) {
      if (err) return next(err);
      res.redirect(`http://localhost:3000?token=${token}`);
    });
  }
);

export default handler;
