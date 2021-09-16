const { Router } = require("express");
const router = Router();

require("./db");

router.get("/", (req, res) => {
  res.json({ message: "hello friend" });
});

router.get("/home", (req, res) => {
  res.json({ message: "welcome to home" });
});

router.get("/about", (req, res) => {
  res.json({ message: "welcome to about" });
});

module.exports = router;
