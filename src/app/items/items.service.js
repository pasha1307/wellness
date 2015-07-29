(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .service('CommonProp', CommonProp);

  /** @ngInject */
  function CommonProp() {
    var Items = [];
    var Total = 0;
    var service = {
      getItems: function(){
        return Items;
      },
      setItem: function(value){
        Items = value;
      },
      getTotal: function(){
        return Total;
      },
      setTotal: function(value){
        Total = value;
      }

    };

    return service;


  }
})();
