require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDatabase, Card } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/card", async (req, res) => {
  try {
    const { name, description, interests, socialLinks } = req.body;
    const card = await Card.create({
      name,
      description,
      interests,
      socialLinks,
    });
    card.save();
    console.log("card created");
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({
      error: error.errors,
    });
  }
});

app.get("/api/cards", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "server error" });
  }
});

connectDatabase();
app.listen(3000, () => {
  console.log("listening on port 3000");
});
