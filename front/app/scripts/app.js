'use strict';

angular.module('frontApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/backlog', {
        templateUrl: 'views/backlog.html',
        controller: 'BacklogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
