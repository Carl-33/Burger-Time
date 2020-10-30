// const mysql = require("mysql");
// const connection = require("../config/connection");
const orm = require("../config/orm.js")

const burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        console.log("paarrrrrrrrrrrrrrrrrrtaaaaaay")
        console.log(res );
        console.log("paarrrrrrrrrrrrrrrrrrtaaaaaay")
        cb(res);
  
      });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    },
};

module.exports = burger;
