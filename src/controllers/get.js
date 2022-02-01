const { Book } = require("../models/book");

const GetBooks = async (req, res) => {

  try {
    const SEARCH = await Book.find();
    res.status(200).send({ data: SEARCH });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "500", msg: "Can't load books" });
  }
};

module.exports = { GetBooks };
