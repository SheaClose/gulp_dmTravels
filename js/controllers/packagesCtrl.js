angular.module('devmtnTravel').controller('packagesCtrl', [
  '$scope',
  'mainSrv',
  '$state',
  function($scope, mainSrv, $state) {
    $scope.packageInfo = mainSrv.packageInfo.filter(function(c) {
      return c.country === $state.params.country;
    });
  }
]);
