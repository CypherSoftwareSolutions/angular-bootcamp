'use strict';

angular.module('joshuaApp')
  .controller('FirebaseCtrl', function ($scope, $firebase, firebaseAuth, $rootScope) {
      var ref = new Firebase("https://torid-fire-5565.firebaseio.com/messages");
      $scope.messages = $firebase(ref)

      $scope.addMessage = function(e) {
        if (e.keyCode != 13) return;
        $scope.messages.$add({from: $rootScope.current_user.displayName, body: $scope.msg});
        $scope.msg = "";
      };

      // listen for user auth events
      $rootScope.$on("login", function(event, user) {
        $scope.$apply()
      })
      $rootScope.$on("logout", function(event) {
        $scope.$apply()
      })
  });
