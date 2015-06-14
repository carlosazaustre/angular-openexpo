(function () {
  'use strict';

  angular
    .module('directorio')
    .controller('EmpleadoController', EmpleadoController);

  EmpleadoController.$inject = ['$routeParams', 'Empleado'];

  function EmpleadoController ($routeParams, Empleado) {
    var vm = this;

    Empleado
      .get($routeParams.empleadoId)
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
