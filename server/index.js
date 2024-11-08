const express = require("express");
const Pool = require("pg");
const cors = require("cors");

const db = new Pool.Client({
  user: "postgres",
  host: "localhost",
  database: "todoApp",
  password: "gurita123456",
  port: 5432,
});

db.connect();

const app = express();
const url = 5000;

app.use(cors()); // use cors for setUp client side
app.use(express.json()); // get input from dev or user

// ROUTES

// GET ALL QUOTES / READ
app.get("/quote", async (req, res) => {
  try {
    const getData = await db.query("SELECT * FROM quotesOfTheDay"); // ambil dari database

    res.send(getData.rows);
  } catch (err) {
    console.log(err);
  }
});

// get random quote
app.get("/quote/random", async (req, res) => {
  try {
    const getData = await db.query("SELECT * FROM quotesOfTheDay");
    const randomIndex =
      getData.rows[Math.floor(Math.random() * getData.rows.length)]; // sintaks for get random index

    console.log(randomIndex);

    res.send(randomIndex);
  } catch (err) {
    console.log(err);
  }
});

//  get specific quote

app.get("/quote/:id", async (req, res) => {
  const id = req.params.id; // { id } destructuring
  const getData = await db.query(
    "SELECT * FROM quotesOfTheDay WHERE quotes_id = $1",
    [id]
  );

  if (getData.rows.length == 0) {
    res.status(404).json({ message: "Data not available", status: 400 });
  } else {
    res.status(200).json(getData.rows[0]);
  }
});

// CREATE QUOTE

app.post("/quotes", async (req, res) => {
  try {
    const { description } = req.body;
    const newQuotes = await db.query(
      "INSERT INTO quotesOfTheDay (quotes_description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newQuotes.rows[0])
  } catch (err) {
    console.log(err.message);
  }
});

// EDIT QOUTE
app.put("/quote/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateToto = await db.query(
      "UPDATE quotesoftheday SET quotes_description = $1 WHERE quotes_id = $2",
      [description, id]
    );

    res.json("to do was updated");
  } catch (err) {
    res.json(err);
  }
});

// DELETE QUOTE
app.delete("/quote/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await db.query(
      "DELETE FROM quotesoftheday WHERE quotes_id = $1",
      [id]
    );
    res.json("todo was deleted");
  } catch (err) {
    res.json("error in : " + err);
  }
});

app.listen(url, () => {
  console.log(`server running at localhost : ${url}`);
});
