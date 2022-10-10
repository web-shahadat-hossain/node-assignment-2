const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 7000;

mongoose.connect(process.env.DB_URI).then(() => {
  console.log("DB connected".blue.bold);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`.yellow.bold);
});

app.use(errorHandler);
