const express = require("express");
const app = express("app");
const path = require("path");
const mysql = require('mysql');
const PORT  = 9996;

//init libraries
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/css", express.static(path.join(__dirname, "node_modules/font-awesome")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/css", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use(express.static("views"));
app.set("view engine", require("ejs").renderFile);

//init routes
var baseRoutes = require("./routes/baseRoutes");
app.use("/", baseRoutes);


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});