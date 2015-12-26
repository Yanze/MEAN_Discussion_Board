var app = angular.module("app");

app.factory("LoginFactory", function($http){
  var factory = {};

  factory.setUsername = function(username){
    localStorage.setItem("username", username);
  };

  factory.getUsername = function(){
    return localStorage.getItem("username");
  };


  return factory;
});
