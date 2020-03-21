const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { Strategy } = require('passport-spotify');

const users = require('../db/services/user');
const JWT_KEY = process.env.JWT_KEY;

const router = express();

passport.use(
  new Strategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/spotify/callback',
    },

    function(accessToken, refreshToken, profile, cb) {
      users.findOrCreate(profile);
      return cb(null, profile);
    }
  )
);

router.get(
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

router.get(
  '/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res, next) => {
    const token = jwt.sign({ id: req.user.id }, JWT_KEY, {
      expiresIn: 60 * 60 * 24 * 1000,
    });
    req.logIn(req.user, function(err) {
      if (err) return next(err);
      res.redirect(`http://localhost:3000?token=${token}`);
    });
  }
);
module.exports = router;
