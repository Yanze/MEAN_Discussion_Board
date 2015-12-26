var mongoose = require("mongoose");
var Discussion = mongoose.model("Discussion");
var User = mongoose.model('User');

module.exports = (function(){

  return {
    addDiscussion: function(req, res){
      User.findOne({name: req.body.username}, function(err, user){
        var userId;
        var current_user;

        if(!user){
          var new_user = new User({
            name: req.body.username,
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


        var discussion = new Discussion({
          text: req.body.text,
          _user: userId,
          comments: []
        });

        discussion.save(function(err){
          if(err){
            res.json({
              status:"error",
              message: "Something went wrong..."
            });
          }
          else{
            current_user.discussions.push(discussion);
            current_user.save();
            res.json({
                status:"success",
                message: "Successfully added!"
              });
          }
        });
      });
    },

    getAll: function(req, res){
      Discussion.find({}).populate('_user', 'name')
                         .populate({
                            path: 'comments',
                            populate: {
                                path: '_user',
                                select: 'name'
                            }
                          })
                         .exec(function(err, discussions){
        if(err){
          res.json({
            status:"error",
            message: "Something went wrong..."
          });
        }
        else{
          res.json(discussions);
        }
      });
    },





  };
})();
