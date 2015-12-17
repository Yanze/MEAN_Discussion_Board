var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = (function() {
  return {
    // show: function(req, res){
    //   User.findOne({"name": req.body.name}, function(err, user){
    //     if(err){
    //       res.json({status: "error",
    //                   message:"User does not exist."});
    //     }
    //     else{
    //       res.json(user);
    //     }
    //   });
    // },

    add: function(req, res) {

      var user = new User({
        name: req.body.name,
        topics: req.body.topics,
        answers: req.body.answers,
        comments: req.body.comments
      });

      User.findOne({"name": req.body.name}, function(err, response){
        if(response){
          res.json("found");
          return;
        }
        else{
          user.save(function(err) {
            if (err) {
              res.json({status: "error",
                          message:"Something went wrong..."});
            } else {
              console.log("successfully added");
              res.json({status: "success",
                          message:""});
            }
          });
        }
      });    
    }
  };
})();
