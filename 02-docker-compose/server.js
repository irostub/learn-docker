const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

client.set("num", 0);

app.get("/", (req, res) => {
  client.get("num", (err, num) => {
    res.send(`Visited ${num} times`);
    client.set("num", parseInt(num) + 1);
  });
});

app.listen(8080);
console.log("Listening on port 8080");
