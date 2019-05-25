const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

var users = require("./routes/Users")

app.use("/users", Users);

app.listen(port, () => {
  console.log(`Server started on port {$port}`);
});