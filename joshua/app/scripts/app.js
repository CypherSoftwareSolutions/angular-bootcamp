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
  });
