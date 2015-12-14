app.directive('championInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info:'='
        },
        templateUrl: 'js/directives/championInfo.html'
    };
});