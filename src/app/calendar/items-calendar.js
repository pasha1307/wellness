(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .controller('CalendarController', CalendarController);


  /** @ngInject */
  function CalendarController($scope, $firebase) {

      var ref = new Firebase('https://wellness-calendar.firebaseio.com/todos');
      $scope.todos = $firebase(ref).asArray();
      $scope.newTodo = '';

      $scope.addTodo = function(){
        var newTodo = $scope.newTodo.trim();
        if (!newTodo.length) {
          return;
        }
        // push to firebase
        $scope.todos.$add({
          title: newTodo,
          completed: false
        });
        $scope.newTodo = '';
      };
      $scope.removeTodo = function(todo){
        $scope.todos.$remove(todo);
      };

  }//CalnedarController

})();
