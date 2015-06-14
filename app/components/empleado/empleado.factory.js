(function () {
  'use strict';

  angular
    .module('directorio')
    .factory('Empleado', Empleado);

  Empleado.$inject = ['$http', 'API_URL'];

  function Empleado ($http, API_URL) {

    return {
      getAll: getAll,
      get   :    get
    }

    function getAll () {
      return $http.get(API_URL + '/empleados/');
    }

    function get (empleado) {
      return $http.get(API_URL + '/empleados/' + empleado);
    }
  }

})();
