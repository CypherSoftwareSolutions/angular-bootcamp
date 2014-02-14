'use strict';

angular.module('joshuaApp')
  .controller('FirebaseCtrl', function ($scope, $firebase) {
      var ref = new Firebase("https://torid-fire-5565.firebaseio.com/messages");
      $scope.messages = $firebase(ref)

      $scope.addMessage = function(e) {
        if (e.keyCode != 13) return;
        $scope.messages.$add({from: $scope.name, body: $scope.msg});
        $scope.msg = "";
      };

  });
