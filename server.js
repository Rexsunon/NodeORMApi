const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config({ path: "./config/.env" });

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(cors());

require("./database/connection");

require("./bootstrap")();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running on ${process.env.NODE_ENV} mode and listening on port: ${PORT}`
  )
);
