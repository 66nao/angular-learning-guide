angular.module('learningApp', ['ngRoute', 'hc.marked']).
  config(['$locationProvider', '$routeProvider', 'markedProvider',
    function($locationProvider, $routeProvider, markedProvider) {
    $routeProvider.
        when('/introduction', {templateUrl: 'html/introduction.html'}).
        when('/getting-started', {templateUrl: 'html/getting-started.html'}).
        when('/lesson/:index', {templateUrl: 'html/lesson.html', controller: 'LessonCtrl'}).
        when('/the-end', {templateUrl: 'html/the-end.html'}).
        otherwise({redirectTo: '/introduction'});
    markedProvider.setRenderer({
      code: function (code, lang) {
        return "<pre><code class='hljs"
          + (lang?(" lang-" + lang):"") + "'>"
          + hljs.highlightAuto(code).value + "</code></pre>";
      }
    });
    markedProvider.setOptions({
      gfm: true,
      tables: true,
      breaks: true
    });
  }]);
