'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ProveedoresCtrl
 * @description
 * # ProveedoresCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('ProveedoresCtrl',['$scope', 'proveedores', function ($scope, proveedores) {
    proveedores.get(function (response) {
      $scope.proveedores = response.results;
    });
  }]);
