app.controller("HomeController", function($scope, $http) {
    $scope.view = {};
    $scope.view.welcome = "Home"

    // $http.get('https://api.github.com/zen')
    // .then(function(data){
    //     $scope.view.zenData = data;
    // });


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

    $http.get('https://messagehttpservice.herokuapp.com/messages')
    .then(function(data) {
        $scope.view.chatApp = data;
    })

    $http.post('https://messagehttpservice.herokuapp.com/messages')
    .then(function(data) {

    })

    $http.post('https://messagehttpservice.herokuapp.com/messages', {
        message: {
            name: "Os",
            content: "I love carpet."
        }
    })
   .then(
       function(response){
           $scope.view.chatApp = response;
       },
       function(error){
           $scope.view.error = error;
       }
    );


});
