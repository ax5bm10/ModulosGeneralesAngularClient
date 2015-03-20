'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ClientesCtrl
 * @description
 * # ClientesCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('ClientesCtrl', function ($scope, clientes) {

    clientes.get(function (response) {
      $scope.clientes = response.results;
    });
  });
