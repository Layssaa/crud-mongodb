const mongoose = require("../database/index");

const BookInstanceSchema = new mongoose.Schema({
  book: {
    type: String,
    require: true,
    lowercase: true,
  },
  imprint: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  due_back: {
    type: Date,
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

const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);

module.exports = { BookInstance };
