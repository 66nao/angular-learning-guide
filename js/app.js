angular.module('learningApp', ['ngRoute']).
  config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider, $rootscope, $location) {
    $routeProvider.
        when('/introduction', {templateUrl: 'html/introduction.html'}).
        when('/getting-started', {templateUrl: 'html/getting-started.html'}).
        when('/lesson/:index', {templateUrl: 'html/lesson.html', controller: 'LessonCtrl'}).
        when('/the-end', {templateUrl: 'html/the-end.html'}).
        otherwise({redirectTo: '/introduction'});
}]);
