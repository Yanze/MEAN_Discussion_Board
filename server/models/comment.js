var mongoose = require("mongoose"), Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  text: String,
  name: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _discussion: { type: Schema.Types.ObjectId, ref: 'Discussion' }
});

mongoose.model('Comment', CommentSchema);
