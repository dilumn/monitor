(function (angular) {
    'use strict';

    var console = function () {
        var directive = {
            templateUrl: 'scripts/dashboard/console/console.html',
            restrict: 'E',
            scope: {
                type: '@'
            },
            controller: 'ConsoleController',
            controllerAs: 'vm',
            link: function (scope) {
            } 
        };
        return directive;
    };

    console.$inject = [];

    angular
        .module("monitorApp")
        .directive('console', console);

}(angular));