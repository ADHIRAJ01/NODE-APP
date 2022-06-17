const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("working home file");
});

app.get('/', (req, res) => {
  res.send("home page");
});

app.get('/about', (req, res) => {
  res.send("about page");
});

app.get('*', (req, res) => {
  res.status(401).send("error");
})

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
})