'use strict';

angular.module('frontApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/backlogs', {
        templateUrl: 'views/backlog.html',
        controller: 'BacklogCtrl'
      })
        .when('/backlogs/:id', {
          templateUrl: 'views/backlog.html',
          controller: 'BacklogCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
