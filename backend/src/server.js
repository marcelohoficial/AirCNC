const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

mongoose
  .connect(
    "mongodb+srv://aircnc:mitd8slrTd6rjeER@cluster0-aircnc.7ddqs2i.mongodb.net/aircnc?retryWrites=true&w=majority&appName=Cluster0-aircnc",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

//app.use(cors({ origin: 'http://localhost:3333' }));
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);
