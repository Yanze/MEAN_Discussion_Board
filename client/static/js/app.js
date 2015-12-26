var app = angular.module("app", ["ngRoute" ,"ngMessages"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'static/partials/login.html',
    controller: "loginController"
  })
  .when('/discussions', {
    templateUrl: 'static/partials/discussions.html',
    controller: "discussionsController"
  });


});
