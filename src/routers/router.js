const express = require("express");
const router = express.Router();

const { deleteBook } = require("../controllers/delete");
const { getBooks } = require("../controllers/get");
const {
  insertBook,
  insertAuthor,
  insertGenre,
} = require("../controllers/insert");
const { updateBook } = require("../controllers/update");
const { verifyFields } = require("../middlewares/verify-fields");

// mudar nomes das funções para letras minusculas

router.get("/search?", getBooks);

router.post("/send", verifyFields, insertBook);

router.post("/sendauthor", verifyFields, insertAuthor);

router.post("/sendgenre", verifyFields, insertGenre);

router.put("/update?", verifyFields, updateBook);

router.delete("/delete/:id", deleteBook);

module.exports = router;
