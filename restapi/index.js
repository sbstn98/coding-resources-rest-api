const express = require("express");
const { connection } = require("./db.config.js");
const app = express();
const port = 3001;
var cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.listen(port, function () {
  console.log(`Listening on ${port}...`);
});

app.get("/", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(`SELECT * FROM resources`);

  res.status(200).json({ results });
});
