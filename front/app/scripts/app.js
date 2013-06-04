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

angular.module('frontApp').directive('fibonnaci', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var fibonnacis = [1, 2, 3, 5, 8, 13, 20, 40, 80];
      ctrl.$parsers.unshift(function(viewValue) {
        if (fibonnacis.indexOf(viewValue)) {
          // it is valid
          ctrl.$setValidity('fibonnaci', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('fibonnaci', false);
          return undefined;
        }
      });
    }
  };
});
