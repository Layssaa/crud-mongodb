const mongoose = require("../database/index");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    lowercase: true,
  },
  author: {
    type: String,
    required: true,
    lowercase: true,
  },
  summary: {
    type: String,
    required: true,
  },
  genre: {
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

const Book = mongoose.model("Book", BookSchema);

module.exports = { Book };
