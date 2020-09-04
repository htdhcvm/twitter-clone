require('dotenv').config();



const   cookieParser = require('cookie-parser'),
        cors = require("cors"),
        session = require("express-session"),
        MongoDBStore = require("connect-mongodb-session")(session),
        bodyParser = require("body-parser"),
        passport = require("passport"),
        mongoose = require("mongoose"),
        auth = require("./routes/auth"),
        userData = require("./routes/userData");



const { 
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env;



const config = (app) => {
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@twitter.t2glp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true,  useUnifiedTopology: true });

    let store = new MongoDBStore({
        uri: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@twitter.t2glp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
        collection: "twitter_sesstion"
    });
    
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
}

module.exports = config;
