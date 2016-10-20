// app.controller("serviceController", function($scope, firstService) {
//     $scope.view = {};
//     $scope.view.greeting = firstService.sayHi();
//     $scope.view.users = firstService.getAllUsers();
// });

app.controller("CalcCtrl", function($scope, RPNCalcService) {
    $scope.view = {};
    $scope.view.opSymbols = ["+", "-", "x", "/", "ˆ" ]
    $scope.calc = function(item, n1, n2) {
        switch(item) {
            case "+": return $scope.view.result = RPNCalcService.add(n1, n2);
            case "-": return $scope.view.result = RPNCalcService.substract(n1, n2);
            case "x": return $scope.view.result = RPNCalcService.multiply(n1, n2);
            case "/": return $scope.view.result = RPNCalcService.divide(n1, n2);
            case "ˆ": return $scope.view.result = RPNCalcService.power(n1, n2);
        }
    }
});
