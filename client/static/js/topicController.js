var app = angular.module("app");

app.factory('TopicFactory', function($http){
  var factory = {};

  factory.getTopics = function(callback){
    $http.get('/get-topics').success(function(response){
      callback(response);
    });
  };

  factory.addTopic = function(topic ,callback){
    $http.post('/add-topic', topic).success(function(response){
      callback(response);
    });
  };
  return factory;
});

app.controller('topicController', function($scope, TopicFactory, UserFactory){

  $scope.current_user = UserFactory.current_user;

  // get all topics

  // add function add_topic()


  // UserFactory.getUser(function(data) {
  //   // console.log(data);
  //   $scope.user = data;
  // });



});
