const express = require("express");

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// routes
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
