const express = require("express");
const { connection } = require("./db.config.js");
const app = express();
const port = 3003;

var cors = require("cors");

app.use(cors());

app.use(express.json());

app.listen(port, function () {
  console.log(`Listening on ${port}...`);
});

app.get("/ressources", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(`SELECT * FROM resources`);
  res.status(200).json({ results });
});

app.get("/ressources/html", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(
    `SELECT * FROM resources WHERE html = true`
  );
  res.status(200).json({ results });
});

app.get("/ressources/css", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(
    `SELECT * FROM resources WHERE css = true`
  );
  res.status(200).json({ results });
});

app.get("/ressources/js", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(
    `SELECT * FROM resources WHERE jsc = true`
  );
  res.status(200).json({ results });
});

app.get("/ressources/german", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(
    `SELECT * FROM resources WHERE german = true`
  );
  res.status(200).json({ results });
});

app.get("/ressources/english", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(
    `SELECT * FROM resources WHERE english = true`
  );
  res.status(200).json({ results });
});

app.get("/ressources/:id", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(
    `SELECT * FROM resources WHERE id = ?`,
    [req.params.id]
  );
  res.status(200).json({ results });
});

app.post("/ressources", async (req, res) => {
  console.log(req.body);
  const { title, subtitle, description, url, german, english, html, css, jsc } =
    req.body;

  const connected = await connection();
  const [results, _] = await connected.execute(
    `INSERT INTO resources (title, subtitle, description, url, german, english, html, css, jsc ) VALUES (?,?,?,?,?,?,?,?,?)`,
    [title, subtitle, description, url, german, english, html, css, jsc]
  );

  res.status(200).json({ results });
});
