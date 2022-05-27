const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const policySchema = new Schema(
  {
    title: { type: String, require: true },
    subject: { type: String, require: true },
    challenge: { type: String, require: true },
    suggestion: { type: String, require: true },
    rating: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Policy = mongoose.model("Policy", policySchema);
module.exports = Policy;
