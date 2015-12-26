var mongoose = require("mongoose");
var Discussion = mongoose.model("Discussion");
var User = mongoose.model("User");
var Comment = mongoose.model("Comment");

module.exports = (function(){

  return {

    addComment: function(req, res){
      User.findOne({name: req.body.name}, function(err, user){
        var userId;
        var current_user;

        if(!user){
          var new_user = new User({
            name: req.body.name,
            discussions: [],
            comments: []
          });
          new_user.save();
          userId = new_user._id;
          current_user = new_user;
        }
        else{
          userId = user._id;
          current_user = user;
        }

        Discussion.findOne({_id: req.body._discussion}, function(err, discussion){
          var new_comment = new Comment({
            text: req.body.text,
            name: current_user.name,
            _user: req.body._user,
            _discussion: req.body._discussion
          });

          new_comment.save(function(err){
            if(err){
              res.json({
                status: "error",
                message: "KO"
              });
            }
            else {
              current_user.comments.push(new_comment);
              current_user.save();
              discussion.comments.push(new_comment);
              discussion.save();
              res.json({
                status: "success",
                message: "OK"
              });
            }
          });
        });
      });



    },




  };
})();
