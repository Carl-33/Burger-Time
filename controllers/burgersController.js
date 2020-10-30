const express = require("express");

const router = express.Router();

const burger = require('../models/burgers.js');


router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      console.log(req.body.burger_name);
      res.json({ id: result.insertId });
    });
  });

module.exports = router;