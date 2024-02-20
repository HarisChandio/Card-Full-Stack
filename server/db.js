const mongoose = require("mongoose");
const { Schema } = require("zod");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected ot database");
  } catch (error) {
    console.log("couldnt connect to database");
    console.error(error);
  }
};

const cardSchema = mongoose.Schema({
  name: String,
  description: String,
  interests: {
    type: [String],
    requried: true,
  },
  socialLinks: {
    type: {},
    required: true,
  },
});

const Card = mongoose.model("card", cardSchema);

module.exports = { connectDatabase, Card };
