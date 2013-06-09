'use strict';

angular.module('frontApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/backlog-list.html',
          controller: 'BacklogListCtrl'
      })
      .when('/backlogs', {
        templateUrl: 'views/backlog.html',
        controller: 'BacklogCtrl'
      })
        .when('/backlogs/:id', {
          templateUrl: 'views/backlog.html',
          controller: 'BacklogCtrl'
        })
      .when('/backlog-list', {
        templateUrl: 'views/backlog-list.html',
        controller: 'BacklogListCtrl'
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
        if (fibonnacis.indexOf(parseInt(viewValue)) >= 0) {
          ctrl.$setValidity('fibonnaci', true);
          return viewValue;
        } else {
          ctrl.$setValidity('fibonnaci', false);
          return undefined;
        }
      });
    }
  };
});

angular.module('frontApp').directive('cbutton', function() {
  return {
    restrict: 'A',
    transclude: true,
    template: '<button ng-click="triggerAction($event)" ng-disabled="isProcessing" class="btn btn-primary" ng-transclude>' +
        '<i ng-show="isProcessing" class="icon-refresh icon-spin"></i>' +
  '&nbsp;' +
  '</button>',
    scope: {
      action: "&"
    },
    controller: function($scope){
      $scope.isProcessing = false;

      $scope.triggerAction = function(e) {
        e.stopPropagation();
        console.log('in controller');
        $scope.isProcessing = true;
        $scope.action().then(function(){
          $scope.isProcessing = false;
        });
      };
    }
  }
});
