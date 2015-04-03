'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ClientesCtrl
 * @description
 * # ClientesCtrl
 * Controller of the modulosGeneralesApp
 */


angular.module('modulosGeneralesApp')
  .controller('ClientesCtrl',['$scope','clientes','$mdDialog', function ($scope, clientes, $mdDialog) {
    clientes.get(function (response) {
      $scope.clientes = response.results;
    });

    /*$scope.cargar = function (client) {
      $scope.newCliente = client;
    };*/

    $scope.cargar = function(ev,cliente) {
      $mdDialog.show({
        controller: ['$scope','$mdDialog', 'client' ,function ($scope, $mdDialog, client) {
          console.log(client);
          $scope.newCliente = client;
          $scope.hide = function () {
            $mdDialog.hide();
          };
          $scope.cancel = function () {
            $mdDialog.cancel();
          };
          $scope.answer = function (answer) {
            $mdDialog.hide(answer);
          };
        }],
        templateUrl: 'views/dialogs/dialogo_cliente.html',
        targetEvent: ev,
        locals: {client: cliente},
        bindToController: true
      })
        .then(function(answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.alert = 'You cancelled the dialog.';
        });
    };
  }]);

