const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gymnastSchema = new Schema({
  name: { type: String, required: true },
  coach: { type: String, required: true },
  competitions: String,
  dob: { type: Date, default: Date.now },
  usag: { type: Number }
});

const Gymnast = mongoose.model("Gymnast", gymnastSchema);

module.exports = Gymnast;