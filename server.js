const express = require("express");
const { config } = require("./config");
require("./db");

const app = express();
app.use(express.json());

// routes
app.use("/api/posts", require("./post/routes"));
app.get("/", (req, res) => {
  res.redirect("/api/posts");
});

app.listen(config.port, () => {
  console.log(`Server on ${config.port}`);
});
