angular.module('MolineteApp.Hours', [])
.controller('HoursController', ['$scope', HoursController]);

function HoursController($scope){
 $scope.name = 'demo';
}