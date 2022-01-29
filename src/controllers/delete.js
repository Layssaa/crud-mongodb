const { Book } = require("../models/book");

const DeleteBook = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(200).send({ status: "400", msg: "Invalid id" });

  try {
    const deletedBook = await Book.deleteOne({ id: id });
    res.status(200).send({ data: "deleted book!" });

  } catch (error) {
    console.log(error);
    res.status(200).send({ status: 500, msg: "deleted book" });
  }
};

module.exports = { DeleteBook };
