const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const routes = require("./routes/routes");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
db.authenticate()
  .then(() => console.log("Database ready"))
  .catch((error) => console.error("Database connection error:", error));

// Routes
app.use(routes);

// Test route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
