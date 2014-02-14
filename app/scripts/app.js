'use strict';

angular.module('joshuaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/basics', {
          templateUrl: 'views/basics.html',
          controller: 'BasicsCtrl'
      })
      .when('/firebase', {
        templateUrl: 'views/firebase.html',
        controller: 'FirebaseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .service('firebaseAuth', ["$rootScope", function($rootScope) {
    var ref = new Firebase("https://torid-fire-5565.firebaseio.com");

    $rootScope.auth = new FirebaseSimpleLogin(ref, function(error, user) {
      if (user) {
        $rootScope.current_user = user
        $rootScope.$emit("login", user);
      }
      else if (error) {
        $rootScope.$emit("loginError", error);
      }
      else {
        $rootScope.current_user = null;
        $rootScope.$emit("logout");
      }
    });
  }]);
