angular
  .module('devmtnTravel')
  .controller('bookedCtrl', function($scope, mainSrv, $state) {
    $scope.booked = mainSrv.packageInfo.filter(c => {
      return Number(c.id) == Number($state.params.id);
    })[0];
    $scope.myStyle = {
      background: 'url($scope.booked) cover cover no-repeat center  border-box'
    };
  });
