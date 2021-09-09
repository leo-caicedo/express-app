const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "hello friend" });
});

router.get(
  "/home",
  (req,
  (res) => {
    res.json({ message: "Welcome to home" });
  })
);

module.exports = router;
