const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gymnastSchema = new Schema({
  name: { type: String, required: true },
  coach: { type: String },
  competitions: Object,
  dob: { type: Date },
  usag: { type: Number }
});

const Gymnast = mongoose.model("Gymnast", gymnastSchema);

module.exports = Gymnast;dob