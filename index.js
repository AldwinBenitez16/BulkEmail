const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

// creates a new express application
const app = express();

require("./routes/authRoutes")(app);

// dynamically set the port to the preset port, or use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
