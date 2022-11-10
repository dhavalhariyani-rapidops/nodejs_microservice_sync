const dotEnv  = require("dotenv");

dotEnv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
    SERVICE_NAME: process.env.SERVICE_NAME,
    BASE_URL: process.env.BASE_URL
}
 