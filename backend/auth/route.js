const express = require("express")
const router = express.Router()
const { register } = require("./auth")
const { login } = require("./auth")
router.route("/register").post(register)
router.route("/login").post(login)
module.exports = router