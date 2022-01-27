const mongoose = require("../database/index");
const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: {
    type:  Schema.Types.ObjectId,
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
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], // valores permitidos de uma string.
    default: 'Maintenance'
  },
  due_back: {
    type: Date,
    default: Date.now
    },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);

module.exports = { BookInstance };
