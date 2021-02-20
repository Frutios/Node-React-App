const express = require("express");
const app = express();
const connection = require("./config");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");
require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use(express.static("client/build"));

app.disable('etag');


app.listen(PORT, () => console.log(`Example app listening on port` + PORT));

connection.connect(function (err) {
  if (err) {
    console.error("error connecting : " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/crew", (req, res) => {
  connection.query("SELECT * FROM crew_mate", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/new", (req, res) => {
  const name = req.body.name;
  connection.query(
    "INSERT INTO crew_mate (name) VALUES (?)",
    [name],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.delete("/bye", (req, res) => {
  connection.query("DELETE FROM crew_mate", (err, results) => {
    if (err) {
      res.status(500).send("Error deleting data");
    } else {
      res.status(200).send("Values deleted");
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname+'client/build/index.html'));
});
