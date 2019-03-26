const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  oauthId: String,
  name: String,
  email: String,
  profile: String,
  role: String,
  passWord: String,
  type: String,
  provider: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
