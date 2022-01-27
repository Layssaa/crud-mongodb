const express = require("express");
const router = express.Router();

const { DeleteBook } = require("../controllers/delete");
const { GetBooks } = require("../controllers/get");
const { InsertBook, InsertAuthor, InsertGenre } = require("../controllers/insert");
const { UpdateBook } = require("../controllers/update");

router.get("/search", GetBooks);

router.post("/send", InsertBook);

router.post("/sendauthor", InsertAuthor);

router.post("/sendgenre", InsertGenre);

router.put("/update", UpdateBook);

router.put("/delete", DeleteBook);

module.exports = router ;
