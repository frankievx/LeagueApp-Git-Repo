app.controller('MainController', ['$scope', 'champion', function($scope, champion) {
  champion.success(function(data) {
    $scope.title = 'League Of Legends App';
    $scope.championStats = data;
  });
}]);