const express = require("express");
require("./services/passport");

// creates a new express application
const app = express();

require("./routes/authRoutes")(app);

// dynamically set the port to the preset port, or use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
