const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const politicianSchema = new Schema(
  {
    fullname: { type: String, require: true },
    dob: { type: Date, require: true },
    gender: { type: String, require: true },
    email: { type: String, require: true },
    officeAddress: { type: String, require: true },
    homeAddress: { type: String, require: true },
    officePhone: { type: String, require: true },
    homePhone: { type: String, require: true },
    school: { type: String, require: true },
    maxQualifications: { type: String, require: true },
    fb: { type: String, require: true },
    utube: { type: String, require: true },
    web: { type: String, require: true },
    secretary: { type: String, require: true },
    secPhone: { type: String, require: true },
    secEmail: { type: String, require: true },
    party: { type: String, require: true },
    position: { type: String, require: true },
    district: { type: String, require: true },
    previousTerms: { type: String, require: true },
    projectOngoing : { type: String, require: true },
    rating: { type: String, require: true }
  },
  {
    timestamps: true,
  }
);

const Politician = mongoose.model("Politician", politicianSchema);
module.exports = Politician;
