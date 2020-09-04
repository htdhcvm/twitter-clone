const passport = require("passport");

const treatment = (err, user, info, cb) => {
    if(err) return cb(true, info);
    if(!user) return cb(true, info);
    return cb(false, info);
}

class Auth {
    registration(req, res, next) {
        passport.authenticate("registration", (err, user, info) => {
            treatment(err, user, info, (errStatus, text) => {
                if(errStatus) return res.send({status : false, text : text});
                req.logIn( user, (err) => {
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    return res.send({
                        status : true,
                        text : info
                    });
                })
            })
        })(req, res, next)
    }

    authorization(req, res, next) {
        passport.authorize("authorization", (err, user, info) => {
            treatment(err, user, info, (errStatus, text) => {
                console.log(errStatus, text);
                if(errStatus) return res.send({status : false, text : text});
                req.logIn( user, (err) => {
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    return res.send({
                        status : true,
                        text : info
                    });
                })
            })
        })(req, res, next);
    }


    checkAuth(req, res) {
        if(req.user === undefined) return res.send({ status : false});
        return res.send({ status : true });
    }


    logout(req, res) {
        req.logout();
        res.send({
            status : true,
            pathToRedirect : "/"
        })
    }
}

module.exports = new Auth();
