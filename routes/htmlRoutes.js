var db = require("../models");

module.exports = function(app) {
  // Load index page
 
  app.get("/calendar", function(req, res) {
    // db.Dating.findAll({}).then(function(dating_poolDB) {
      // console.log("dating: ", dating_poolDB)
      
      res.render("calendar", {
        msg: "Date Calendar!"
      });
    // });
  });
  app.get("/survey", function(req, res) {
    // db.Dating.findAll({}).then(function(dating_poolDB) {
      // console.log("dating: ", dating_poolDB)
      
      res.render("survey", {
        msg: "Survey!"
      });
    // });
  });
  app.get("/profile", function(req, res) {
    db.Dating.findAll({}).then(function(data) {
      console.log("dating: ", data)
      
      res.render("profile", {
        msg: "Here are your potential Mates:",
        data
      });
    });
  });
  app.get("/intention", function(req, res) {
    // db.Dating.findAll({}).then(function(dating_poolDB) {
      // console.log("dating: ", dating_poolDB)
      
      res.render("intention", {
        msg: "What are you looking for?"
      });
    // });
  });
  app.get("/", function(req, res) {
    // db.Dating.findAll({}).then(function(dating_poolDB) {
      // console.log("dating: ", dating_poolDB)
      
      res.render("index", {
        msg: "Welcome"
      });
    // });
  });
  app.get("/blog", function(req, res) {
    res.render("blog", {
      msg: "Welcome"
    });
  });
  app.get("/signinup", function(req, res){
    res.render("signinup", {
      msg: "Sign in or up!"
    });
  });


  // Load example page and pass in an example by id

// ==============EDIT THIS CODE TO OPEN INDIVIDUAL PROFILES IF WE HAVE TIME =========
  // app.get("/profile/:id", function(req, res) {
  //   db.Dating.findOne({ where: { id: req.params.id } }).then(function(dating_poolDB) {
  //     res.render("example", {
  //       database: dating_poolDB
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
