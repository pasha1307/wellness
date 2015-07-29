(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .directive('getScroll', getScroll);

  /** @ngInject */
  function getScroll($window) {
    var scope;
    var directive = {

      scope: {
      scroll: '=scroll'
    },
        link: function(scope, element, attrs) {

          var scrollwindow = angular.element($window);

          scrollwindow.on('scroll', scope.$apply.bind(scope, function() {
            scope.scroll = scrollwindow.scrollTop();
          }));

        }


    };

    return directive;

    /** @ngInject */
  }

})();
