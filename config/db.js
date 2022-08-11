const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
// promise way
// const connectDB = () => {
//   mongoose
//     .connect(db)
//     .then(() => {
//       console.log("MongoDB connected");
//     })
//     .catch((err) => {
//       console.log(err.message);
//       process.exit(1);
//     });
// };
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
