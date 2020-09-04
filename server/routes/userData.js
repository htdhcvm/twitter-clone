require('dotenv').config();
const express = require("express");

const router = express.Router();


router.post("/getLoginAuth", (req, res) => {
    if(req.user !== undefined) return res.send({ status : true, login : req.user.login});
    return res.send({
        status : false,
        login : undefined
    })
});



module.exports = router;