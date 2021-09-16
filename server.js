const createApp = require("./app");
const { config } = require("./config");
require("./db");

const app = createApp();

app.listen(config.port, (err) => {
  if (err) return console.error(err);
  console.log(`Server on ${config.port}`);
});
