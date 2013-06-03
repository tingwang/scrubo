'use strict';

angular.module('frontApp')
  .controller('BacklogCtrl', function ($scope, $http) {
      $scope.backlog = {
      };
      $scope.create = function(e) {
        $http.post('/backlogs', $scope.backlog, function(data) {
          console.log(data);
        }, function(data) {
          console.log(data);
        });
        e.stopPropagation();
      }
  });
