(function () {
  'use strict';

  angular
    .module('directorio')
    .controller('ListadoController', ListadoController);

  ListadoController.$inject = ['$http'];

  function ListadoController ($http) {
    $http
      .get('http://taller-angular.carlosazaustre.es/empleados')
      .success(onRequestComplete)
      .error(onError);

    function onRequestComplete (data) {
      console.log(data);
    }

    function onError(err) {
      console.log(err);
    }
  }

})();
