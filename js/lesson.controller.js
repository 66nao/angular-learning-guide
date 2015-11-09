'use strict'

angular.module('learningApp')
.controller('LessonCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.lessonHtml = '/html/lesson/' + $routeParams.index + '.html';
}]);
