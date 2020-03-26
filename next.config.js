const dotEnv = require('dotenv');

const prod = process.env.NODE_ENV === 'production';

if (!prod) {
  dotEnv.config();
}

module.exports = {
  env: {
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    BASE_URL: process.env.BASE_URL,
  },
  build: {
    env: {
      MONGO_URL: process.env.MONGO_URL,
      JWT_SECRET: process.env.JWT_SECRET,
      SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
      SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
      BASE_URL: process.env.BASE_URL,
    },
  },
};
