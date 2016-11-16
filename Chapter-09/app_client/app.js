(function () {
    
angular.module('Airport', ['ngroute']);

function config ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});
}

angular
    .module('airport')
    .config(['$routeProvider'. config]);
    
}) ();
