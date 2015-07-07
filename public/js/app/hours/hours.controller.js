angular.module('MolineteApp.Hours', [])
.controller('HoursController', ['$scope', HoursController]);

function HoursController($scope){
 $scope.hours = [
     {
         id : '1',
         date : '07/07/2015 9:45'
     },
     {
         id : '2',
         date : '07/07/2015 18:10'
     }
 ];
}