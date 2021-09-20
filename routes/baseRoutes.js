var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", (req, res) => {
    res.render(path.join(__dirname, "./../views/ejs/index.ejs"));
})
router.get("/auth", (req, res) => {
    res.render(path.join(__dirname, "./../views/ejs/authentification.ejs"));
})
router.get("/insc", (req, res) => {
    res.render(path.join(__dirname, "./../views/ejs/inscription.ejs"));
})
router.get("/admin", (req, res) => {
    res.render(path.join(__dirname, "./../views/ejs/homeAdmin.ejs"));
})


module.exports = router;