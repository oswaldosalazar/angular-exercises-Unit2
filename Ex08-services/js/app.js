var app = angular.module("serviceApp", ['ngRoute', 'ngMaterial'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
    })
    $locationProvider.html5Mode(true);
});
