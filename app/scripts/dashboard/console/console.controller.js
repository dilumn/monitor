'use strict';

(function (angular) {
    'use strict';
    var consoleController = function ($scope) {

    	$scope.$watch("type", function (value) {
        console.log($scope.type);
      });
      
    };

    consoleController.$inject = ['$scope'];
    angular.module('monitorApp')
        .controller('ConsoleController', consoleController);

}(angular));