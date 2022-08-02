const express = require('express')
const router = express.Router()

router.get("/", async(req, res) => {
    res.render("index", { tittle: "Sok💔u Lampung" });
  });
  
  router.get("/Product", async(req, res) => {
    res.render("product", { tittle: "Sok💔u Lampung - Product" });
  });
  
  router.get("/Testimonial", async(req, res) => {
    res.render("testimonial", { tittle: "Sok💔u Lampung - Testimonial" });
  });
  
  router.get("/Gallery", async(req, res) => {
    res.render("gallery", { tittle: "Sok💔u Lampung - Gallery" });
  });
  
  router.get("/About", async(req, res) => {
    res.render("about", { tittle: "Sok💔u Lampung - About" });
  });
  
  router.get("/Admin", async(req, res) => {
    res.render("admin", {
      tittle: "Sok💔u Lampung - Admin",
      layout: "./layouts/adminLayout",
    });
  });

module.exports = router