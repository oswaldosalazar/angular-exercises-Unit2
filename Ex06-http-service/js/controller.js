app.controller("HomeController", function($scope, $http) {
    $scope.view = {};
    $scope.view.welcome = "Home"

    $http.get('https://api.github.com/zen')
    .then(function(data){
        $scope.view.zenData = data;
    });

    // $http.get('https://itunes.apple.com/search?term=lorde')
    // .then(function(data){
    //     $scope.view.itunes = data;
    // });

    $http.get('itunes.json')
    .then(function(artistData){
        $scope.view.itunes = artistData.data.results;
    });

});
