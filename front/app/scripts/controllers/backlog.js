'use strict';

angular.module('frontApp')
  .controller('BacklogCtrl', function ($scope, $http) {
      $scope.backlog = {
        name: "test backlog",
        storyPoints: 3,
        description: "desc of test backlog"
      };
      $scope.create = function(e) {
        alert('create');
        $http.post('/backlogs', $scope.backlog, function(data) {
          console.log(data);
        }, function(data) {
          console.log(data);
        });
        e.stopPropagation();
      }
  });
