const express = require("express");
const router = express.Router();

const { DeleteBook } = require("../controllers/delete");
const { GetBooks } = require("../controllers/get");
const {
  InsertBook,
  InsertAuthor,
  InsertGenre,
} = require("../controllers/insert");
const { UpdateBook } = require("../controllers/update");
const { VerifyFields } = require("../middlewares/insert-verify");

router.get("/search?", GetBooks);

router.post("/send", VerifyFields, InsertBook);

router.post("/sendauthor", VerifyFields, InsertAuthor);

router.post("/sendgenre", VerifyFields, InsertGenre);

router.put("/update?", VerifyFields, UpdateBook);

router.delete("/delete/:id", DeleteBook);

module.exports = router;
