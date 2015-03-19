'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('MainCtrl', function ($scope, clientes) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    clientes.get(function (responce) {
      $scope.clientes = responce.results;
    });
  });
