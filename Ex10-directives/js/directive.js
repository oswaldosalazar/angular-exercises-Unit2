app.directive('gsAngularLogoE', function() {
    return {
        restrict: 'E',
        template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
    };
});
app.directive('gsAngularLogoA', function() {
    return {
        restrict: 'A',
        template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
    };
});
app.directive('angularLogo', function() {
    return {
        restrict: 'E',
        templateUrl:'partials/logoDetails.html'
    };
});
