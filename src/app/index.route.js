(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
//      views: {
//        view: {
//          'home': {
//            templateUrl: 'app/main/main.html',
//            controller: 'MainController',
//            controllerAs: 'main'
//          }
//        }
//      }

      })
    .state('items',{
    url: '/items',
    templateUrl: 'app/items/items.html',
    controller: 'DataController'
  })
    .state('items.detail',{
      url:'/:itemId',
      views: {
        "item": {
          templateUrl: 'app/items/items-detail.html',
          controller: function($scope,$stateParams) {
            $scope.itemId = $stateParams.itemId;
          }
        }
      }
    })
    .state('items.checkout',{
     url: '/checkout',
     views: {
       'checkout': {
        templateUrl: 'app/items/checkout.html',
        controller: function($scope, CommonProp) {
          $scope.items = CommonProp.getItems();
          $scope.total = CommonProp.getTotal();
        }
       }

     }
    })
    .state('calendar',{
      url: '/calendar',
      views: {
        'calendar': {
          templateUrl: 'app/calendar/items-calendar.html',
          controller: 'CalendarController'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  }

})();
