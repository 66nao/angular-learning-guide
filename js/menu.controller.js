'use strict'

angular.module('learningApp')
.controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.isMenuitemSelected = function (route) {
    return route === $location.path();
  }
}]);
