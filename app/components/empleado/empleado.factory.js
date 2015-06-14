(function () {
  'use strict';

  angular
    .module('directorio')
    .factory('Empleado', Empleado);

  Empleado.$inject = ['$http'];

  function Empleado ($http) {

    return {
      getAll: getAll,
      get   :    get
    }

    function getAll () {
      return $http.get('http://taller-angular.carlosazaustre.es/empleados/');
    }

    function get (empleado) {
      return $http.get('http://taller-angular.carlosazaustre.es/empleados/' + empleado);
    }
  }

})();
