angular
  .module('devmtnTravel')
  .controller('packagesCtrl', function($scope, mainSrv, $state) {
    $scope.packageInfo = mainSrv.packageInfo.filter(
      c => c.country === $state.params.country
    );
  });
