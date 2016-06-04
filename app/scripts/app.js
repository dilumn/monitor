'use strict';

/**
 * @ngdoc overview
 * @name monitorApp
 * @description
 * # monitorApp
 *
 * Main module of the application.
 */
angular
  .module('monitorApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
            .otherwise({
        redirectTo: '/'
      });
  });
