const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");
require("dotenv/config");

console.log(process.env.MONGO_URL);
console.log(process.env.PORT);

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
