const DeleteBook = async (req, res) => {
  console.log("DELETE BOOKS");
  res.status(200).send({ msg: "deleted book" });
};

module.exports = { DeleteBook };
