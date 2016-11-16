angular
    .module('airport')
    .controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['$scope', 'airportData', 'geolocation'];    
function homeCtrl ($scope, airportData, geolocation) {
    var vm = this;
    vm.pageHeader = {
        title: "Airport Data",
        strapline: 'Find Airport data at particular airports'
    };
    vm.sidebar = {
        content: "See the weather data at your airport"
    };
    vm.message = "Checking your location";
    vm.getData = function (position) {
        var lat = position.coords.latitude,
            long = position.coords.longitude;
        vm.message = "Searching for nearby airports";
        airportData.locationByCoords(lat, long)
          .success(function(data) {
              vm.message = data.length > 0 ? "" : "No airports found nearby";
              vm.data = { airports: data };
          })
          .error(function (e) {
              vm.message = "Sorry, something's gone terribly wrong";
          });
    };
    vm.showError = function (error) {
     $scope.$apply(function() {
         vm.message = error.message;
     });
    };
    vm.noGeo = function () {
      $scope.$apply(function() {
          vm.message = "Geolocation is not supported by this browser.";
      });
    };
    geolocation.getPosition(vm.getData, vm.showError, vm.noGeo);
}