const mongoose = require('mongoose');
const { DB_URL, SERVICE_NAME } = require('../config');

module.exports = async () => {

    try {
        await mongoose.connect(DB_URL);
        console.log(`${SERVICE_NAME} DB Connected...`);
        
    } catch (error) {
        console.log('===%%Error%%===');
        console.log(error);
        process.exit(1);
    }
};