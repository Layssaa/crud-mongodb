const { Genre } = require("../models/genre");

const getIdGenre = async (_genreName) => {
  const { id } = await Genre.findOne({ name: _genreName });
  return id;
};

module.exports = { getIdGenre };
