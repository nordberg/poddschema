angular.module('MainCtrl', []).controller('MainController', function($scope) {

  var days = [['Måndag', 'monday'], ['Tisdag', 'tuesday'],
    ['Onsdag', 'wednesday'], ['Torsdag', 'thursday'], ['Fredag', 'friday'],
    ['Lördag', 'saturday'], ['Söndag', 'sunday']];


  days.forEach(function (e, i, a) {
    $scope[e[1]] = e[0];
  });

});
