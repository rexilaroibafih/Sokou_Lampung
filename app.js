const express = require("express")
const path = require('path')
const bodyParser = require("body-parser")
const { check, validationResult } = require("express-validator")
const expressLayouts = require("express-ejs-layouts")
const mysql = require("mysql")
const dotenv = require("dotenv")

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config({ path: './.env'})

//MySql
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

db.connect((err) => {
  if(err) throw err
  console.log('Database Connected...')
})

//static files
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

//Templating Engine
app.use(expressLayouts);
app.set("views", "./src/views");
app.set("layout", "./layouts/layout.ejs");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { tittle: "Sok💔u Lampung" });
});

app.get("/Product", (req, res) => {
  res.render("product", { tittle: "Sok💔u Lampung - Product" });
});

app.get("/Testimonial", (req, res) => {
  res.render("testimonial", { tittle: "Sok💔u Lampung - Testimonial" });
});

app.get("/Gallery", (req, res) => {
  res.render("gallery", { tittle: "Sok💔u Lampung - Gallery" });
});

app.get("/About", (req, res) => {
  res.render("about", { tittle: "Sok💔u Lampung - About" });
});

app.get("/Admin", (req, res) => {
  res.render("admin", {
    tittle: "Sok💔u Lampung - Admin",
    layout: "./layouts/adminLayout",
  });
});

//Listen on port 3000
app.listen(port);
console.log("Listening on port ", port);
