require('dotenv').config();
const express = require("express");
const path = require("path");
const User = require("../models/user/user");
const bcrypt = require("bcrypt");

const SALT = +process.env.SALT;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const router = express.Router();



passport.use("registration", new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
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
    // console.log(user, "serialize");
    done(null, user.login);
});


passport.deserializeUser(function(login, done) {
    User.findOne( {login : login}, (err, user) => {
        done(err, user);
    })
});

const hashPassword = (password) => {
    return new Promise( (resolve, reject) => {
        bcrypt.hash(password, SALT, (err, hash) => {
            if(err) return reject(reject);
            return resolve(hash);
        });
    })
}

 

router.post("/registration", (req, res, next) => {
    passport.authenticate("registration", (err, user, info) => {
        if(err) {
            return res.send({
                status : false,
                text : info
            });
        }
        if(!user) return res.send({
            status : false,
            text : info
        });
        req.logIn(user, (err) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            // res.cookie('cookie_token', info, { maxAge: 900000 }) 
            res.send({
                status : true,
                text : info
            });
            next();
        });
    })(req, res, next)
});




router.post("/authorization", async (req, res) => {


});








router.post("/awd", (req, res) => {
    console.log(req.session, " / test")
});

module.exports = router;