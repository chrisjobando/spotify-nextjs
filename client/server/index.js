const express = require('express');
const nextjs = require('next');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotEnv = require('dotenv');
dotEnv.config();
require('./db/mongoose');

passport.serializeUser(function(user, done) {
  done(null, user);
});

const app = nextjs({ dev });

app
  .prepare()
  .then(() => {
    const server = express();
    // Parse json encoded in the request body
    server.use(bodyParser.json({ limit: '50mb' }));

    // Allow cors from all - no hustle and never safe
    server.use((_, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, GET, DELETE, OPTIONS'
      );
      next();
    });

    server.use(passport.initialize());

    server.use('/auth', require('./routes/auth'));
    server.use('/user', require('./routes/user'));

    // Start server
    server.listen(3001, err => {
      if (err) throw err;
      console.log('> Server listening on http://localhost:3001');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
