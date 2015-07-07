angular.module('MolineteApp',['ngRoute','MolineteApp.Hours'])
.config(['$routeProvider', 
    function($routeProvider){
        $routeProvider.
          when('/', {
            templateUrl: 'partials/articles.html'
          }).
          when('/about', {
            templateUrl: 'partials/about.html'
          }).
          when('/contact', {
            templateUrl: 'partials/contact.html'
          }).
          when('/hours', {
              templateUrl: '/js/app/hours/hours.view.html',
              controller: 'HoursController'
          }).
          otherwise({
            redirectTo: '/'
          });
    }
]);