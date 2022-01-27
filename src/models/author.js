const mongoose = require("../database/index");

const AutorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
    lowercase: true,
  },
  family_name: {
    type: String,
    required: true,
    lowercase: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  date_of_death: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lifespan: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Author = mongoose.model("User", AutorSchema);

module.exports = { Author };