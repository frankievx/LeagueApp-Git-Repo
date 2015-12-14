app.factory('champions', ['$http', function($http) {
    return $http.get('http://ddragon.leagueoflegends.com/cdn/5.24.1/data/en_US/champion.json').success(function(data) {
        return data;
    })
    .error (function(err) {
        return err;
    });
}]);