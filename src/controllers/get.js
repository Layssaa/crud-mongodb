const { Book } = require("../models/book");

const GetBooks = async (req, res) => {
  try {
    const SEARCH = await search(req.query); 
    res.status(200).send({ data: SEARCH });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "500", msg: "Can't load books" });
  }
};

const search = async (_obj) => {
  if (Object.keys(_obj).length === 0) {
    return await Book.find({}).sort({ title: -1 });
  }
  return await Book.find({ ..._obj });
};

module.exports = { GetBooks };
