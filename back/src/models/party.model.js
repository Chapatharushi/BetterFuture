const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const partySchema = new Schema(
  {
    partyname: { type: String, require: true },
    partyleader: { type: String, require: true },
    partysecretary: { type: String, require: true },
    noofmps: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Party  = mongoose.model("Party", partySchema);
module.exports = Party;
