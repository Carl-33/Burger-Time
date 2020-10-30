const express = require("express");

const router = express.Router();

const burger = require('../models/burgers.js');


router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            data
        };
        console.table("this is hbsData: " + hbsObject);

        res.render("index", hbsObject);
    });
});


module.exports = router;