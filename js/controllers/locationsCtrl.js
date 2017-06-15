angular.module('devmtnTravel').controller('locationsCtrl', [
  '$scope',
  'mainSrv',
  function($scope, mainSrv) {
    $scope.travelInfo = mainSrv.travelInfo;
  }
]);
