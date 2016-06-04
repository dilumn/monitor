'use strict';

(function (angular) {
    'use strict';
    var homeController = function ($scope,$http, $interval) {
    	var vm = this;

      $scope.barLabels = [];
      $scope.barData = [];
      $scope.barSeries = [];

      $scope.lineData = [];
      $scope.lineLabels = [];
      $scope.lineSeries = [];
      

      
      $scope.lineSeries.push("name");
        // $scope.labels = ["00", "02", "03", "04", "05", "06", "07","08", "09", "10", "11", "12", "13", "14"];
        // $scope.series = ['Series A', 'Series B','Series C','Series D'];
        // $scope.data = [
        //   [1, 2, 3, 4, 5, 4, 1, 4],
        //   [2, 4,],
        //   [4, 2, 1, 0, 6, 0],
        //   [null, null, null, null, 2, 5]
        // ];

      {$interval(function() {
        vm.refresh();
      }, 2000);}

      vm.refresh = function (){
        $http({method: 'GET', url: 'http://127.0.0.1:3000/actorsTasks'}).
        then(function(response) {
          console.log(response);
          

          for (var i=0; i < response.data.length; i++){
            
            var tasks = response.data[i];

            if (!$scope.barData[i])
            {
              $scope.barSeries.push("Test");
              var actor = [];
              actor.push(tasks);
              $scope.barData.push(actor);
            }
            else{
              var actor = [];
              actor.push(tasks);
              $scope.barData[i] = actor;
            }

            if ($scope.lineData.length === 0){
              var array = [];
              $scope.lineData.push(array);
            }

            if ($scope.lineData[0][i] === undefined)
            {
              $scope.lineData[0].push(tasks);
              $scope.lineLabels.push("1");
            }
            else{
              $scope.lineData[0][i] = tasks;
            }

          }
        }, function(response) {
          
        });
      };
    	

    };

    homeController.$inject = ['$scope','$http', '$interval'];
    angular.module('monitorApp')
        .controller('HomeController', homeController);

}(angular));