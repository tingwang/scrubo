'use strict';

angular.module('frontApp')
  .controller('BacklogCtrl', function ($scope, $http, $location, $routeParams) {

      $scope.backlog = {
      };
      if ($routeParams.id) {
        $http.get('/backlogs/' + $routeParams.id)
            .success(function(backlog){
              $scope.backlog= backlog;
            })
            .error(function(err) {
              console.log(err);
            });
      }
      $scope.create = function(e) {
        console.log('tried to save backlog');
        $http.post('/backlogs', $scope.backlog)
            .success(function(data, status, header) {
              console.log("backlog saved");
              var location = header('Location');
              console.log(data, location);
              $location.path(location);
            })
            .error(function(data) {
              console.log(data);
            });
        e.stopPropagation();
      }
    });
