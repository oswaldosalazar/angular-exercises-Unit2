app.controller("inputController", function($scope, $http) {
    $scope.movies = {};

    $scope.search = function () {
        var searchUrl = "http://www.omdbapi.com/?s="+$scope.movies.title+"&y=&plot=short&r=json"
        $http.get(searchUrl)
        .then(function(movieData){
            $scope.movies.results = movieData.data.Search;
        });

    }

    // $http.get('itunes.json')
    // .then(function(artistData){
    //     $scope.view.itunes = artistData.data.results;
    // });

    // $http.get('https://itunes.apple.com/search?term=lorde')
    // .then(function(data){
    //     $scope.view.itunes = data;
    // }, function error(response) {
    //     $scope.view.error = response;
    // });

});
