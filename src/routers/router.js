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
const { insertVerifyInfo } = require("../middlewares/insert-verify");

router.get("/search?", GetBooks);

router.post("/send", insertVerifyInfo, InsertBook);

router.post("/sendauthor", insertVerifyInfo, InsertAuthor);

router.post("/sendgenre", insertVerifyInfo, InsertGenre);

router.put("/update?", insertVerifyInfo, UpdateBook);

router.delete("/delete/:id", DeleteBook);

module.exports = router;
