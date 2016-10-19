var app = angular.module("U2Ex05app", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    })
    .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
});
