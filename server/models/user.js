// require mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// this is db collection model, il should be exactly same as your db collection
var UserSchema = new mongoose.Schema({
  name: String,
  _topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

// register schema as a model
// this file will run when we require it using our config file
// since the model is defined, we will access it from our controller;
mongoose.model('User', UserSchema);
