(function () {
  'use strict';

  angular
    .module('directorio')
    .controller('EmpleadoController', EmpleadoController);

  function EmpleadoController ($http, $routeParams) {
    var vm = this;

    $http
      .get('http://taller-angular.carlosazaustre.es/empleados/' + $routeParams.empleadoId)
      .success(onRequestComplete)
      .error(onError);

    function onRequestComplete (data) {
      vm.data = data;
    }

    function onError (err) {
      console.log(err);
    }
  }

})();
