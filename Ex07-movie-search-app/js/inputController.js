app.controller("inputController", function($scope, $http) {
    $scope.movies = {};
    $scope.search = function () {
        var searchUrl = "http://www.omdbapi.com/?s="+$scope.movies.title+"&y=&plot=short&r=json";
        $http.get(searchUrl)
        .then(function(movieData){
            $scope.movies.results = movieData.data.Search;
        });
    }
});

app.controller("movieController", function($scope, $http, $routeParams) {
    $scope.movies = {};
    var movieID = $routeParams.movieID
    var searchUrl = "http://www.omdbapi.com/?i="+movieID+"&y=&plot=short&r=json";
    $http.get(searchUrl)
    .then(function(movieData) {
        $scope.movies.results = movieData.data;
        console.log($scope.movies.results);
    })
});
