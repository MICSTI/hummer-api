require('dotenv').config();

const config = {
  app: {
    port: process.env.APP_PORT,
  },
  token: {
    secret: process.env.TOKEN_SECRET,
  },
};

module.exports = config;
