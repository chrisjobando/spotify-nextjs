const mongoose = require('mongoose');

const setUpConnection = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  setUpConnection: setUpConnection,
};
