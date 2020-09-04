const express = require("express");
const AuthController = require("../controllers/auth");
const PassportServes = require("../services/passportService");

const router = express.Router();

router.post("/registration", AuthController.registration);

router.post("/authorization", AuthController.authorization);

router.post("/logout", AuthController.logout);

router.post("/checkAuth", AuthController.checkAuth);

module.exports = router;