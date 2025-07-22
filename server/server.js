const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes");
const { sequelize } = require("./db/models");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const testDbConnection = (async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected succesfully.");
  } catch (error) {
    console.error(
      "Unable to connect to the database:",
      error.original.sqlMessage
    );
  }
})();
