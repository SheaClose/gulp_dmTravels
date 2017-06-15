angular.module('devmtnTravel').controller('bookedCtrl', [
  '$scope',
  'mainSrv',
  '$state',
  function($scope, mainSrv, $state) {
    $scope.booked = mainSrv.packageInfo.filter(function(c) {
      return Number(c.id) == Number($state.params.id);
    })[0];
    $scope.myStyle = {
      background: 'url($scope.booked) cover cover no-repeat center  border-box'
    };
  }
]);
