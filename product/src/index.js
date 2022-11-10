const express = require("express");
const { PORT, SERVICE_NAME } = require("./config");
const { databaseConnection } = require("./database");
const expressApp = require("./express-app");

const StartServer = async () => {
  const app = express();

  await databaseConnection();

  await expressApp(app);

  app
    .listen(PORT, () => {
      console.log(`${SERVICE_NAME} Service Listening on Port : ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};
StartServer();
