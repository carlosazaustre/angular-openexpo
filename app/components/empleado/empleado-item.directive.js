(function () {
  'use strict';

  angular
    .module('directorio')
    .directive('empleadoItem', empleadoItem);

  function empleadoItem () {
    return {
      restrict: 'E',
      scope: {
        index: "=",
        picture: "=",
        fullName: "=",
        title: "=",
        department: '='
      },
      templateUrl: 'app/components/empleado/empleado-item.html',
      link: function(scope, element, attrs) {
        console.log(scope);
      }
    }
  }

})();
