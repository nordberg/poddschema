angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/podcast', {
      templateUrl: '/views/podcast.html',
      controller: 'PodcastController'
    })

    .when('/admin', {
      templateUrl: '/views/admin.html',
      controller: 'AdminController'
    });

    $locationProvider.html5Mode(true);
}]);
