var app = angular.module("app");

app.factory("DiscussionsFactory", function($http){
  var factory = {};

  factory.getDiscussions = function(callback){
    $http.get('/get-discussions').success(function(response){
      callback(response);
    });
  };

  factory.addDiscussion = function(newDiscussion, callback){
    $http.post('/add-discussion', newDiscussion).success(function(response){
      callback(response);
    });
  };

  return factory;
});
