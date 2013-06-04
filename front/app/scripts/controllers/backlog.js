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

      $scope.click = function() {
        console.log($scope.form.$error.fibonnaci);
      };

      $scope.create = function(e) {
        var method = 'post'
            , id = $routeParams.id
            , url = '/backlogs';

        if(id) {
          method = 'put';
          url = url + '/' + id;
        }
        $http[method](url, $scope.backlog)
            .success(function(data, status, header) {
              var location = header('Location');
              if (location) {
                $location.path(location);
              }
            })
            .error(function(data) {
              console.log(data);
            });
        e.stopPropagation();
      }
    });
