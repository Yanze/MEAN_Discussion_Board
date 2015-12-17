
// require the controller here;


var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
// var products = require('../controllers/products.js');



// define routes here, all back end functions to execute db query;
module.exports = function(app){
  app.get('/topics', topics.show);
  app.get('/get-user');
  app.post('/add-topic', topics.add);
  app.post('/add-user', users.add);
  // app.post('/delete-customer', customers.delete);
  //
  // app.get('/orders', orders.show);
  // app.post('/add-order', orders.add);
  // app.post('/delete-order', orders.delete);
  //
  // app.get('/products', products.show);
  // app.post('/add-product', products.add);
};
