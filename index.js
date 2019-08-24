/**
 * Entry file for web server
 * @author Tristan Mastrodicasa
 */

const express = require("express");

// Import the route handlers
const baseRoute = require("./routes/base");

const port = process.env.PORT || 80;
const app = express();

// Config
app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({extended: false})); Might need????

// Set route handlers
app.use("/", baseRoute);

// Allow serving static assets from public folder
app.use("/public", express.static("public"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
