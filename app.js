const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "*"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to tutorial application." });
});

require('./routes/tutorial.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`[READY] Server is running on port ${PORT}.`);
});