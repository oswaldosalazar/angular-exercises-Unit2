var app = angular.module("movieApp", ['ngRoute', 'ngMaterial'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'inputController'
    })
    .when('/:results', {
        templateUrl: 'partials/results.html',
        controller: 'resultsController'
    })
    .when('/movie/:movieID', {
        templateUrl: 'partials/movieDetails.html',
        controller: 'movieController'
    })
    $locationProvider.html5Mode(true);
});
