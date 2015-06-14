(function () {
  'use strict';

  angular
    .module('directorio')
    .controller('ListadoController', ListadoController);

  ListadoController.$inject = ['Empleado'];

  function ListadoController (Empleado) {
    var vm = this;
    vm.nombre = true;
    vm.departamento = false

    vm.cambiarBusqueda = function (termino) {
      if (termino === 'nombre') {
        vm.nombre = true;
        vm.departamento = false;
      }
      if (termino === 'departamento') {
        vm.nombre = false;
        vm.departamento = true;
      }
      vm.search = '';
    }

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
