app.directive('caffeineMeter', function() {
  return {
    templateUrl: '../tea-details.html',
    scope: {
      teaCaffeine: '=caffeinemg'
    }
  }
})
