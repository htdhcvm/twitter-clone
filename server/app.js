require('dotenv').config();
const express = require("express");

const {APP_PORT} = process.env;

const app = express();

const config = require("./configuration")(app);

app.listen(APP_PORT || 8000, () => {
    console.log(`Server has been started on ${APP_PORT}`);
})

