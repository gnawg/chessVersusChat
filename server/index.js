const express = require("express");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

// Logging middleware
app.use(morgan("dev"));

// Static file server
app.use(express.static(path.join(__dirname, "..", "dist")));

// Catch-all route: serve homepage
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);

  res.status(err.status || 500).send(err.message || "Internal server error :(");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
