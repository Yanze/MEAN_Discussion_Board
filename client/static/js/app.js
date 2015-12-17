var app = angular.module('app', ["ngRoute", "ngMessages"]);


app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: 'partials/login.html',
    })
    .when("/dashboard", {
      templateUrl: 'partials/topics.html',
    });
    // .when("/products", {
    //   templateUrl: 'partials/products.html',
    //   controller: 'productController'
    // })
    // .when("/customers", {
    //   templateUrl: 'partials/customers.html',
    //   controller: 'customerController'
    // });
});
