const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

var notesArray = [
  {
    id: 15555,
    title: "Test Title",
    text: "Test text",
  },
];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/assets/css/styles.css", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/assets/css/styles.css"));
});

app.get("/assets/js/index.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/assets/js/index.js"));
});

app.get("/assets/js/script.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/assets/js/script.js"));
});

app.get("/api/notes", function (req, res) {
  // TODO: read db.json and parse json array from it

  // return array in res.send
  res.send(notesArray);
});

// make a POST endpoint
// it will add a new item to notesArray
// later, write the new array to db.json
//   notesArray.push({ id: 2, title: "new" });

// make a DELETE endpoint
// it will remove an item from notesArray by id

app.listen(port, () => {
  console.log(`Note Taker app listening on port ${port}`);
});
