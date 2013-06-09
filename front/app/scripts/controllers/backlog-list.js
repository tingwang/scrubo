'use strict';

angular.module('frontApp')
  .controller('BacklogListCtrl', ['$scope', '$http', function ($scope, $http) {
      $http.get('/backlogs')
          .success(function(backlogs) {
            $scope.backlogs = backlogs;
          })
          .error(function() {

          });
      $scope.gridOptions = {data: 'backlogs'};
  }]);
