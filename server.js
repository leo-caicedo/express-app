const express = require("express");
const { config } = require("./config");

const app = express();
app.use(express.json());

// routes
app.use("/", require("./routes"));

app.listen(config.port, () => {
  console.log(`Server on ${config.port}`);
});
