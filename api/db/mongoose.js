const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', e => {
  console.log(e.toString());
  console.log(e.stack);
  process.exit(999);
});

db.once('open', async function() {
  console.info('Database has Connected Successfully');
});

module.exports = mongoose;
