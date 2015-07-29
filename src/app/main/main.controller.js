(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .controller('MainController', MainController);


  /** @ngInject */
  function MainController($timeout, webDevTec) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1437352340565;
//    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'swing';
      }, 2000);
    }

//    function showToastr() {
//      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
//      vm.classAnimation = '';
//    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }

})();
