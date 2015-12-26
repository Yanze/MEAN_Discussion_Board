var mongoose = require("mongoose"), Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String,
  discussions: [{ type: Schema.Types.ObjectId, ref: 'Discussion' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('User', UserSchema);
