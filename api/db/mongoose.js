const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", e => {
  console.log(e.toString());
  console.log(e.stack);
  process.exit(999);
});

db.once("open", async function() {
  console.info("DB Connected Successfully");
});

module.exports = mongoose;
