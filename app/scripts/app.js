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
        templateUrl: 'scripts/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      })
      .when('/home', {
        templateUrl: 'scripts/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
