(function () {
  'use strict';

  angular
    .module('directorio')
    .controller('ListadoController', ListadoController);

  ListadoController.$inject = ['Empleado'];

  function ListadoController (Empleado) {
    var vm = this;

    this.cambiarBusqueda = cambiarBusqueda;

    activate();

    function activate () {
      vm.nombre = true;
      vm.departamento = false

      getEmpleados();
    }

    function getEmpleados() {
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

    function cambiarBusqueda (termino) {
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
    
  }

})();
