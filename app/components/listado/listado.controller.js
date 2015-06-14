(function () {
  'use strict';

  angular
    .module('directorio')
    .controller('ListadoController', ListadoController);

  ListadoController.$inject = ['Empleado'];

  function ListadoController (Empleado) {
    var vm = this;

    Empleado
      .getAll()
      .success(onRequestComplete)
      .error(onError);

    function onRequestComplete (data) {
      vm.empleados = data;
    }

    function onError(err) {
      console.log(err);
    }
  }

})();
