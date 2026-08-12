require("dotenv/config");
const createApp = require("./src/app");

const app = createApp();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Property HQ backend listening on port ${port}`);
});
