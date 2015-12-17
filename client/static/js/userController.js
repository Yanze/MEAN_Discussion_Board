var app = angular.module("app");

// create the FriendFactory
app.factory('UserFactory', function($http) {
  var factory = {};

  var current_user;

  return factory;
});

app.controller('UserController', function($scope, $location, UserFactory) {

  $scope.enter = function(){
    if(!$scope.current_user){
      alert("empty");
      return;
    }

    UserFactory.current_user = $scope.current_user;

    $location.path( "/dashboard" );

  };


});
