var app = angular.module("movieApp", ['ngRoute', 'ngMaterial'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'inputController'
    })
    .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
});
