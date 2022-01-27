const { Author } = require("../models/author");
const { Book } = require("../models/book");
const { Genre } = require("../models/genre");

const InsertBook = async (req, res) => {
  console.log(req.body);
  try {
    const insert = await Book(req.body);
    await insert.save();
    res.send(insert);
  } catch (error) {
    console.log(error);
    res.send("Error when try save it");
  }
};

const InsertAuthor = async (req, res) => {
  console.log(req.body);

  try {
    const insert = await Author(req.body);
    await insert.save();
    // const data = Author.find()
    res.send(insert);
  } catch (error) {
    console.log(error);
    res.send("Error when try save it");
  }
};

const InsertGenre = async (req, res) => {
  console.log(req.body);

  try {
    const insert = await Genre(req.body);
    await insert.save();
    // const data = Author.find()
    res.send(insert);
  } catch (error) {
    console.log(error);
    res.send("Error when try save it");
  }
};

module.exports = { InsertBook, InsertAuthor, InsertGenre };
