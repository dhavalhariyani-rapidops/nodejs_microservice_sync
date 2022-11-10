const express = require('express');
const cors  = require('cors');
const { customer, appEvent } = require('./api');
const HandleErrors = require('./utils/error-handler')

module.exports = async (app) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use(cors());

    appEvent(app);
    customer(app);

    app.use(HandleErrors);
}