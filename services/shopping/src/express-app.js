const express = require('express');
const cors  = require('cors');
const { shopping, appEvents } = require('./api');
const HandleErrors = require("./utils/error-handler");

module.exports = async (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    appEvents(app);
    shopping(app);

    app.use(HandleErrors);
}
