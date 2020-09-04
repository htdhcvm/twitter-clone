const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user/user");
const {
    hashPassword,
    checkPassword
} = require("./bcryptService");

passport.use("registration", new LocalStrategy({
        usernameField: "login",
        passwordField: "password",
        passReqToCallback: true
    },
    async (req, username, password, done) => {
        const date = req.body.date;
        const user = await User.findOne({ login : username});

        if( user === null ) {
            let hash = await hashPassword(password);
            
            const userDoc = new User({
                login : username,
                password : hash, 
                meta : {
                    date : date
                }
            });

            try {
                await userDoc.save();
                return done(null, userDoc, { message : "User was successfully registered"});
            } catch (error){
                return done(null, false, { message: "Something was wrong..." });
            }
        } else {
            return done(null, false, { message: "User already has been registration"});
        }
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.login);
});

passport.deserializeUser(function(login, done) {
    User.findOne( {login : login}, (err, user) => {
        done(err, user);
    })
});


passport.use("authorization", new LocalStrategy({
        usernameField: "login",
        passwordField: "password"
    },
    async(username, password, done) => {
        const user = await User.findOne({login : username});
        if( user != null) {
            checkPassword(password, user.password)
                .then( resultCompare => {
                    if(resultCompare) {
                        return done(null, user, {message : "User was successfully authorization"})
                    }
                    console.log(resultCompare);
                    return done(null, false, {message : "Incorrect password"})
                }, (err) => {
                    throw new Error(err);
                }).catch( err => {
                    console.log(err);
                    return done(true, false, { message: "Something was wrong..." });
                })
        } else {

            return done(null, false, {message : "Incorrect login"})
        }
    }))

