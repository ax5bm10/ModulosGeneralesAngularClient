'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:FacturasCtrl
 * @description
 * # FacturasCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('FacturasCtrl',['$scope', 'facturas', function ($scope, facturas) {

    facturas.get(function (response) {
      $scope.facturas = response.results;
    });
  }]);
