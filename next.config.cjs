const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const dotEnv = require('dotenv');

const prod = process.env.NODE_ENV === 'production';

if (!prod) {
  dotEnv.config();
}

module.exports = withCSS(
  withSass({
    cssModules: true,
    env: {
      MONGO_URL: process.env.MONGO_URL,
      JWT_SECRET: process.env.JWT_SECRET,
    },
  })
);
