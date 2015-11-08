angular.module('learningApp', ['ngRoute']).
  config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider, $rootscope, $location) {
    $routeProvider.
        when('/introduction', {templateUrl: 'html/introduction.html'}).
        when('/get-started', {templateUrl: 'html/get-started.html'}).
        when('/lesson/:index', {templateUrl: 'html/get-started.html', controller: 'LessonCtrl'}).
        when('/the-end', {templateUrl: 'html/the-end.html'}).
        otherwise({redirectTo: '/introduction'});
}]);
