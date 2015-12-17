var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');


module.exports = (function() {
  return {
    show: function(req, res){
      User.findOne({"name": req.body.name}, function(err, user){
        if(err){
          res.json({status: "error",
                      message:"User does not exist."});
        }
        else{
          res.json(user);
        }
      });

      Topic.find({}, function(err, topics){
        if(err){
          res.json({status: "error",
                      message:"User does not exist."});
        }
        else{
          res.json(topics);
        }
      });
    },

    add: function(req, res) {
      var topic = new Topic({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        user_id: req.body._user_id,
        answers: req.body._answers
      });

      topic.save(function(err) {
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
  };
})();
