// require mongoose
var mongoose = require('mongoose');

// this is db collection model, il should be exactly same as your db collection
//
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var TopicSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  _user_id: {type: Schema.Types.ObjectId, ref: 'User'},
  _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});

// register schema as a model
// this file will run when we require it using our config file
// since the model is defined, we will access it from our controller;
mongoose.model('Topic', TopicSchema);
