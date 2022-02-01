const { Author } = require("../models/author");
const { Book } = require("../models/book");
const { Genre } = require("../models/genre");
const { getIdAuthor } = require("../utils/get-id-author");
const { getIdGenre } = require("../utils/get-id-genre");

const InsertBook = async (req, res) => {

  try {
    const { author, genre } = req.body;

    const authorId = await getIdAuthor(author);
    const genreId = await getIdGenre(genre);

    const toInsert = {
      ...req.body,
      author: authorId,
      genre: genreId,
    };

    const insert = await Book(toInsert);
    await insert.save();

    res.status(200).send({ data: "insert" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "500", msg: "Error when try save it" });
  }
};

const InsertAuthor = async (req, res) => {

  try {
    const insert = await Author(req.body);
    await insert.save();
    res.send(insert);
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "500", msg: "Error when try save it" });
  }
};

const InsertGenre = async (req, res) => {
 
  try {
    const insert = await Genre(req.body);
    await insert.save();
    res.send(insert);
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "500", msg: "Error when try save it" });
  }
};

module.exports = { InsertBook, InsertAuthor, InsertGenre };
