const mongoose = require("../database/index");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    require: true,
    lowercase: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
    lowercase: true,
  },
  summary: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: Schema.Types.ObjectId,
      ref: "Genre",
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = { Book };
