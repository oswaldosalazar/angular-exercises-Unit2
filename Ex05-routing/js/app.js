var app = angular.module("U2Ex05app", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    })
    .when('/dogs/:number', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
    })
    .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
});
