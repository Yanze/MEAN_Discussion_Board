var app = angular.module("app");

app.controller("loginController", function($scope,
                                           $location,
                                           LoginFactory) {

  $scope.enter = function() {
    $scope.submitted = true;
    if (!$scope.username ||
      $scope.username.length < 3 ||
      $scope.username.length > 10) {
      return;
    }
    LoginFactory.setUsername($scope.username);
    $location.path('/discussions');
  };




});
