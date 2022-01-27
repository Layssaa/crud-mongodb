const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(require('./routers/router'));

app.listen(PORT, () => {
  console.log("Servidor na porta", PORT);
});
