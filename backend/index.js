const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
// app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
  next();
});

app.get("/portfolio/:cv", (req, res) => {
  fs.readFile("profile.json", "utf-8", (error, data) => {
    const data1 = JSON.parse(data);
    if (error) {
      throw error;
    } else {
      if (req.params.cv === "age") {
        res.send(JSON.stringify(data1.age));
      } else if (req.params.cv === "name") {
        res.send(JSON.stringify(data1.name));
      } else if (req.params.cv === "major") {
        res.send(JSON.stringify(data1.major));
      } else if (req.params.cv === "description") {
        res.send(JSON.stringify(data1.description));
      } else if (req.params.cv === "Khongorzul") {
        res.send(JSON.stringify(data1));
      }
    }
  });
});
app.listen(3008);
