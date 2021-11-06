const express = require("express");

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("hello! docker");
});

app.listen(PORT);
console.log(`listening on port ${PORT}`);
