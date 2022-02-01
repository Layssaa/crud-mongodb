const { Book } = require("../models/book");

const UpdateBook = async (req, res) => {
  const { id } = req.query;

  if (!id)
    return res.status(200).send({ status: "500", msg: "An ID is required" });

  try {
    const updated = await Book.findOneAndUpdate(
      { id: id },
      { ...req.body },
      {
        new: true,
      }
    );
    res.status(200).send({ data: updated });
  } catch (error) {
    res.status(200).send({ status: "500", msg: "Can't updated books" });
  }
};

module.exports = { UpdateBook };
