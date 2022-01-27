const { Book } = require("../models/book");

const GetBooks = async (req, res) => {
  console.log("GET BOOKS");
  try {
    const SEARCH = await Book.findOne();
    res.send(SEARCH);
    
  } catch (error) {
    console.log(error);
    res.send("CAN'T LOAD BOOKS");
  }
};

module.exports = { GetBooks };
