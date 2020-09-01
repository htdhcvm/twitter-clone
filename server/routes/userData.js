require('dotenv').config();
const express = require("express");

const router = express.Router();


router.post("/getUser", (req, res) => {
    let { login } = req.user;
    res.send({login : login})
});



module.exports = router;