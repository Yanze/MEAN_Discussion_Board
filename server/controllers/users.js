var mongoose = require("mongoose");
var User = mongoose.model("User");


module.exports = (function(){

  return {

    getAll: function(req, res){
      User.find({}, function(err, users){
        res.json(users);
      });
    },




  };
})();
