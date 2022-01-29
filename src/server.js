require("dotenv").config();
const express = require("express");
const { LogRouters } = require("./middlewares/logs");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_AMBIENT === "DEVELOPMENT") app.use(LogRouters);

app.use(require("./routers/router"));

app.listen(PORT, () => {
  console.log("Servidor na porta", PORT);
});
