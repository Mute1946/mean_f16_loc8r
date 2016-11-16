angular
    .module('airportApp')
    .service('airportData', airportData);

airportData.$inject = ['http'];   
function airportData ($http) {
    var locationByCoords = function (lat, long) {
        return $http.get('/api/locations?lng=' + lng + '&lat=' + lat +
          '&maxDistance=20');
    };
    return {
        locationByCoords : locationByCoords
    };
}