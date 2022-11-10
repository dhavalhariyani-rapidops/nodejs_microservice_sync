const express = require("express");
const app = express();
const cors = require("cors");
const proxy = require("express-http-proxy");
const {
  PORT,
  CUSTOMER_SERVICE_HOST,
  PRODUCT_SERVICE_HOST,
  SHOPPING_SERVICE_HOST,
} = require("./config");

app.use(cors());
app.use(express.json());

app.use("/customer", proxy(CUSTOMER_SERVICE_HOST));
app.use("/product", proxy(PRODUCT_SERVICE_HOST));
app.use("/shopping", proxy(SHOPPING_SERVICE_HOST));

app.listen(PORT, () =>
  console.log(`Basic Microservice App Listening On Port ${PORT}!`)
);
