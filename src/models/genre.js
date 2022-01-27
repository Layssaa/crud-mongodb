const mongoose = require("../database/index");
const Schema = mongoose.Schema;


const GenreSchema = new Schema({
  name: {
    type: String,
    require: true,
    enum:  ['Fantasy', 'Science Fiction', 'Historical Fiction', 'Realistic Fiction', 'Fan Fiction', 'Narrative Non Fiction', 'Biography', 'Periodicals', 'Sel-help Book', 'Reference Book']
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Genre = mongoose.model("Genre", GenreSchema);

module.exports = { Genre };
