var app = angular.module("app");

app.factory("UserFactory", function($http){
  var factory = {};

  factory.getAllUsers = function(callback){
    $http.get('get-users').success(function(response){
      callback(response);
    });
  };

  return factory;
});
