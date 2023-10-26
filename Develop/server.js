const express = require("express");
const { read } = require("fs");
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


app.post('/api/notes', (req, res) => {
  const body = req.body;
  // do something with the body
  res.send('success');
});
// it will add a new item to notesArray
// later, write the new array to db.json
//   notesArray.push({ id: 2, title: "new" });

app.delete('/api/notes/15555', (req, res) => {
  const id = req.params.id;
res.status(200).send('User deleted successfully');
});

// it will remove an item from notesArray by id
notesArray.splice(notesArray,1);

app.listen(port, () => {
  console.log(`Note Taker app listening on port ${port}`);
});
