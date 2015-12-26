var app = angular.module("app");

app.controller("discussionsController", function($scope,
  $location,
  LoginFactory,
  DiscussionsFactory,
  CommentFactory,
  UserFactory) {

  $scope.username = LoginFactory.getUsername();

  DiscussionsFactory.getDiscussions(function(data){
    $scope.discussions = data;
  });

  UserFactory.getAllUsers(function(data){
    $scope.users = data;
  });



  $scope.addDiscussion = function() {
    $scope.submitted = true;
    if (!$scope.new_discussion ||
      $scope.new_discussion.text.length < 5 ||
      $scope.new_discussion.text.length > 140) {
      return;
    }

    var new_discussion = {
      text: $scope.new_discussion.text,
      username: $scope.username
    };

    DiscussionsFactory.addDiscussion(new_discussion, function(response) {
      if (response.status === "success") {
        $scope.new_discussion = "";
        $scope.submitted = false;

        DiscussionsFactory.getDiscussions(function(data){
          $scope.discussions = data;
        });
      }
    });
  };

  $scope.addCommentByDiscussion = function(discussion){
    discussion.submittedComment = true;
    if (!discussion.new_comment ||
      discussion.new_comment.length < 5 ||
      discussion.new_comment.length > 140) {
      return;
    }

    var comment = {
      text: discussion.new_comment,
      name: $scope.username,
      _user: discussion._user._id,
      _discussion: discussion._id
    };
    console.log(comment);

    CommentFactory.addComment(comment, function(response){
      if (response.status === "success") {
        $scope.new_comment = "";
        $scope.submittedComment = false;

        DiscussionsFactory.getDiscussions(function(data){
          $scope.discussions = data;
        });
        UserFactory.getAllUsers(function(data){
          $scope.users = data;
        });
      }
    });

  };



});
