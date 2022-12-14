require("dotenv").config();
const express = require("express");
const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  try {
    console.log('New request');

    const fileData = fs.readFileSync(
      "../../var/www/html/cryptorank_parser/result.json",
      "utf8"
    );

    res.json(fileData);
  } catch (error) {
    console.error(error);
    res.json({});
  }
});

const start = async () => {
  try {
    server.listen(PORT, () =>
      console.log(`Server started in development mode on PORT = ${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
