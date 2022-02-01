const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.send("abc!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
