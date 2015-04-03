'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ServiciosCtrl
 * @description
 * # ServiciosCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('ServiciosCtrl', ['$scope', 'servicio','servicios', function ($scope, servicio, servicios) {
    servicio.get(function (response) {
      $scope.servicio = response.results;
    });

    servicios.get(function (response) {
      $scope.servicios = response.results;
    });
  }]);
