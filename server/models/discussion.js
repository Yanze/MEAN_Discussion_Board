var mongoose = require("mongoose"), Schema = mongoose.Schema;

var DiscussionSchema = new mongoose.Schema({
  text: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Discussion', DiscussionSchema);
