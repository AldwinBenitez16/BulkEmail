const express = require("express");

// creates a new express application
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there, I've changed" });
});

// dynamically set the port to the preset port, or use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
