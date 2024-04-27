const dotenv = require("dotenv");
dotenv.config();

const config = {
  app: {
    port: 5000, // or any other default port value
  }, // Default port value

  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/RestAPItest",
  },
};

module.exports = config;
