require("dotenv/config");
const app = require("./src/app");

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Property HQ backend listening on port ${port}`);
});
