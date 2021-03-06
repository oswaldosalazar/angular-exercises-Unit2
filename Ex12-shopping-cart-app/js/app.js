var app = angular.module("simpleDirectiveApp", ['ngRoute', 'ngMaterial'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'teaController'
    })
    .when('/cart', {
        templateUrl: 'partials/cart.html',
        controller: 'cartController'
    })
    $locationProvider.html5Mode(true);
});

app.filter('true_false', function() {
    return function(text) {
        if (text) {
            return 'Yes';
        }
        return 'No';
    }
});
