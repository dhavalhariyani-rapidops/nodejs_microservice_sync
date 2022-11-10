const express = require("express");
const cors = require("cors");
const { products, appEvents } = require("./api");
const HandleErrors = require("./utils/error-handler");

module.exports = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  appEvents(app);
  products(app);

  app.use(HandleErrors);
};
