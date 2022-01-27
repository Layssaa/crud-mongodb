const { Book } = require("../models/book");

const InsertBook = async (req, res) => {
    
  try {
    const insert = await Book(req.body);
    await insert.save();
    res.send("SAVED!");

  } catch (error) {
    console.log(error);
    res.send("Error when try save it");
  }
};

module.exports = { InsertBook };
