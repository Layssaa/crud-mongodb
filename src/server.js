require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const { logRouters } = require("./middlewares/logs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") app.use(logRouters);

app.use(require("./routers/router"));

app.listen(PORT, () => {
  console.log("Servidor na porta", PORT);
});
