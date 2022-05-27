const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullname: { type: String, require: true },
    nic: { type: String, require: true },
    dob: { type: Date, require: true },
    gender : {type: String, require: true},
    email : {type: String, require: true},
    phonenu : {type: String, require: true},
    school : {type: String, require: true},
    qualification : {type: String, require: true},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
