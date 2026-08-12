const express = require("express");
const propertiesRoutes = require("./routes/properties.routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/properties", propertiesRoutes);

module.exports = app;
