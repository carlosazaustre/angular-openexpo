(function () {
  'use strict';

  angular
    .module('directorio', ['ngRoute'])
    .config(directorioConfig);

  directorioConfig.$inject = ['$routeProvider', '$locationProvider'];

  function directorioConfig ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl : 'app/components/listado/listado.html',
        controller  : 'ListadoController',
        controllerAs: 'listado'
      })
      .when('/empleado/:empleadoId', {
        templateUrl : 'app/components/empleado/empleado.html',
        controller  : 'EmpleadoController',
        controllerAs: 'empleado'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
