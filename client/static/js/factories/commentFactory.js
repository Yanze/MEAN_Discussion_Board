var app = angular.module("app");

app.factory("CommentFactory", function($http){
  var factory = {};

  factory.addComment= function(comment, callback){
    $http.post('/add-comment', comment).success(function(response){
      callback(response);
    });
  };

  return factory;
});
