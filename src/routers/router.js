const express = require("express");
const router = express.Router();

const { DeleteBook } = require("../controllers/delete-book");
const { GetBooks } = require("../controllers/get-books");
const { InsertBook } = require("../controllers/insert-book");
const { UpdateBook } = require("../controllers/update-book");

router.get("/search", GetBooks);

router.post("/send", InsertBook);

router.put("/update", UpdateBook);

router.delete("/delete", DeleteBook);

module.exports = router ;
