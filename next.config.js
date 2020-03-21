const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const dotEnv = require('dotenv');

const prod = process.env.NODE_ENV === 'production';

if (!prod) {
  dotEnv.config();
}

const withTsconfigPaths = (nextConfig = {}) => ({
  ...nextConfig,
  ...{
    webpack(config, options) {
      const newConfig = {
        ...config,
        resolve: {
          ...config.resolve,
          plugins: [
            ...(config.resolve && config.resolve.plugins),
            new TsconfigPathsPlugin(),
          ],
        },
      };

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(newConfig, options);
      }

      return newConfig;
    },
  },
});

module.exports = withTsconfigPaths(
  withCSS(
    withSass({
      cssModules: true,
      env: {
        MONGO_URL: process.env.MONGO_URL,
        JWT_SECRET: process.env.JWT_SECRET,
      },
    })
  )
);
