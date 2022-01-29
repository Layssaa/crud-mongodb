const { Book } = require("../models/book");

const GetBooks = async (req, res) => {
  console.log("GET BOOKS");
  try {
    const SEARCH = await Book.find();
    res.status(200).send({ data: SEARCH });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "500", msg: "CAN'T LOAD BOOKS" });
  }
};

module.exports = { GetBooks };
