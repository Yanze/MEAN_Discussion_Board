
var discussions = require('./../controllers/discussions.js');
var comments = require('./../controllers/comments.js');
var users = require('./../controllers/users.js');


module.exports = function(app){
  app.post('/add-discussion', discussions.addDiscussion);
  app.get('/get-discussions', discussions.getAll);
  app.post('/add-comment', comments.addComment);
  app.get('/get-users', users.getAll);
};
