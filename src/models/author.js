const mongoose = require("../database/index");
const Schema = mongoose.Schema;

const AutorSchema = new Schema({
  name: {
    type: String,
    required: true,
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
    required: false,
  },
  lifespan: {
    type: String,
    required: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Author = mongoose.model("User", AutorSchema);

module.exports = { Author };
