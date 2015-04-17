'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ServiciosCtrl
 * @description
 * # ServiciosCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('ServiciosCtrl', ['$scope', 'servicio','detalleServicio', function ($scope, servicio, detalleServicio) {
    servicio.get(function (response) {
      $scope.servicio = response.results;
    });

    detalleServicio.get(function (response) {
      $scope.detalleServicio = response.results;
    });
  }]);
