require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require("cors");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser')
const { 
    APP_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env;

const auth = require("./routes/auth");
const userData = require("./routes/userData");

const app = express();

var store = new MongoDBStore({
    uri: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@twitter.t2glp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    collection: "twitter_sesstion"
});

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@twitter.t2glp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true,  useUnifiedTopology: true });

store.on('error', function(error) {
    console.log(error, " - store error");
});

app.use(cookieParser());
app.use(cors({credentials: true, origin : "http://127.0.0.1:3000"}));

app.use(session({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 // 1 hour
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json({ type: "application/json", extended: false }))

app.use(passport.initialize());
app.use(passport.session());


app.use("/authentication", auth);
app.use("/userData", userData);

app.listen(APP_PORT || 8000, () => {
    console.log(`Server has been started on ${APP_PORT}`);
})

