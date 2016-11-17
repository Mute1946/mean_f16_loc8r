angular
    .module('airportApp')
    .service('airportData', airportData);

airportData.$inject = ['http'];   
function airportData ($http) {
    var locationByCoords = function () {
        return $http.get('/api/airport/');
    };
    return {
        locationByCoords : locationByCoords
    };
}