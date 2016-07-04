'use strict';

(function (angular) {
    var dashboardController = function ($scope) {
    	$scope.type = 1;

    };

    dashboardController.$inject = ['$scope'];
    angular.module('monitorApp')
        .controller('DashboardController', dashboardController);

}(angular));