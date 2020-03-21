import nextConnect from 'next-connect';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy } from 'passport-spotify';
import { findOrCreate } from '../../../server/mongodb/actions/User';
import urls from '../../../utils/url';

const handler = nextConnect();

handler
  .use(passport.initialize())
  .use(
    passport.use(
      new Strategy(
        {
          clientID: process.env.SPOTIFY_CLIENT_ID,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
          callbackURL: `${urls.baseUrl}/api/auth/spotify/callback`,
        },

        function(accessToken, refreshToken, profile, done) {
          findOrCreate(profile);
          return done(null, profile);
        }
      )
    )
  )
  .get((req, res, next) => {
    const { redirectTo } = req.query;
    const state = JSON.stringify({ redirectTo });
    const authenticator = passport.authenticate('spotify', {
      scope: [],
      state,
      session: true,
    });
    authenticator(req, res, next);
    next();
    console.log('Flag');
  })
  .get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    (req, res, next) => {
      const token = jwt.sign({ id: req.user.id }, jwtKey, {
        expiresIn: 60 * 60 * 24 * 1000,
      });
      req.logIn(req.user, function(err) {
        if (err) return next(err);
        res.redirect(`${urls.baseUrl}?token=${token}`);
      });
    }
  );

export default handler;
