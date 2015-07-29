(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .directive('checkList', checkList);

  /** @ngInject */
  function checkList() {
    var directive = {
      restrict: 'E',
      scope: {
        option: "=",
        name: "=",
        selected: "=selected"
      },
      template: function(elem, attrs){

       return '<div class="panel-body">\
          <div class="radio" ng-repeat="e in option">\
            <label for="input"><input type="radio" name="{{name}}" ng-model="$parent.selected" ng-value="{{e.price}}">{{e.time}} minutes session - <b>${{e.price}}</b></label>\
                </div>\
          </div>'
      }

    };

    return directive;

    /** @ngInject */
  }

})();
