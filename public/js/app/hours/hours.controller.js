angular.module('MolineteApp.Hours', [])
.controller('HoursController', ['$scope', HoursController]);

function HoursController($scope){
 $scope.dates = [
   {
      id : 1,
      day : {
         dayName : 'Yesterday',
         hours : 8,
         minutes : 15,
         ranges : [
            {
               hours : 4,
               minutes : 0,
               events : [
                  {
                     time : '09:15',
                     eventType : 'Enter'
                  },
                  {
                     time : '12:35',
                     eventType : 'Leave'
                  }]
            },
            {
               hours : 4,
               minutes : 0,
               events : [
                  {
                     time : '12:55',
                     eventType : 'Enter'
                  },
                  {
                     time : '18:45',
                     eventType : 'Leave'
                  }]
            }]
      }
   },
   {
      id : 2,
      day : {
         dayName : 'Tuesday',
         hours : 8,
         minutes : 15,
         ranges : [
            {
               hours : 4,
               minutes : 0,
               events : [
                  {
                     time : '09:15',
                     eventType : 'Enter'
                  },
                  {
                     time : '12:35',
                     eventType : 'Leave'
                  }]
            },
            {
               hours : 4,
               minutes : 0,
               events : [
                  {
                     time : '12:55',
                     eventType : 'Enter'
                  },
                  {
                     time : '18:45',
                     eventType : 'Leave'
                  }]
            }]
      }
   }   
 ];
}