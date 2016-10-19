app.controller("HomeController", function($scope) {
    $scope.view = {};
    $scope.view.welcome = "Welcome to my house."
});

app.controller("DogsController", function($scope, $routeParams) {
    $scope.view = {};
    $scope.view.dogNoise = "Woof woof!";
    console.log($routeParams.number);

    $scope.view.Url = $routeParams.number;
});
