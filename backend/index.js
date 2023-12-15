const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.listen(PORT, () => {
    console.log("Server is Running ");
  });

  app.get("/Test", (req, res) => {
    res.send({
      message: "Hai",
    });
  });