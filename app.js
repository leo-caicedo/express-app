const express = require("express");

const createApp = () => {
  const app = express();
  app.use(express.json());

  // routes
  app.use("/api/posts", require("./post/routes"));
  app.get("/", (req, res) => {
    res.redirect("/api/posts");
  });

  return app;
};

module.exports = createApp;
