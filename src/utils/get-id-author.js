const { Author } = require("../models/author");

const getIdAuthor = async (_authorName) => {
  const { id } = await Author.findOne({ name: _authorName });
  return id;
};

module.exports = { getIdAuthor };
