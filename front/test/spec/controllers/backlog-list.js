'use strict';

describe('Controller: BacklogListCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var BacklogListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BacklogListCtrl = $controller('BacklogListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
