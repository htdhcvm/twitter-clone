require('dotenv').config();
const SALT = +process.env.SALT;
const bcrypt = require("bcrypt");


const hashPassword = (password) => {
    return new Promise( (resolve, reject) => {
        bcrypt.hash(password, SALT, (err, hash) => {
            if(err) return reject(reject);
            return resolve(hash);
        });
    })
}

const checkPassword = (plaintPassword, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plaintPassword, hash, function(err, result) {
            if ( result ) {
                return resolve(true);
            } else if ( result === false ) {
                return resolve(false);
            }
            if (err) return reject(err);
        });
    })
}

module.exports = {
    hashPassword : hashPassword,
    checkPassword : checkPassword
}

 