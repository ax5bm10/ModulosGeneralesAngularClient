'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ProductosCtrl
 * @description
 * # ProductosCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('ProductosCtrl',['$scope', 'productos', function ($scope, productos) {
    productos.get(function (response) {
      $scope.productos = response.results;
    });
  }]);
