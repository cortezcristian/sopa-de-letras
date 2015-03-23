'use strict';

/**
 * @ngdoc directive
 * @name sopaDeLetrasApp.directive:wordfinder
 * @description
 * # wordfinder
 */
angular.module('sopaDeLetrasApp')
  .directive('wordfinder', function () {
    return {
      restrict: 'A',
      templateUrl: './views/wordfinder.html',
      controller: function($rootScope){
        $rootScope.showwords = menu.showWords || false; 
        $rootScope.menu = menu; 

        $rootScope.solve = function(){
            wordfindgame.solve(gamePuzzle, words);
        } 

        $rootScope.togglewords = function(){
            $rootScope.showwords = !$rootScope.showwords; 
        } 

        $rootScope.start = function(){
            words = getRandomWords();
            //options = {height:8, width:8};
            gamePuzzle = wordfindgame.create(words, wordfindelement.find('.puzzle'), wordfindelement.find('.words'), options);
        } 
      },
      link: function postLink(scope, element, attrs) {
        //var words = attrs.words.split(',');
        wordfindelement = element;
        words = getRandomWords();
        //options = {height:8, width:8};
        gamePuzzle = wordfindgame.create(words, element.find('.puzzle'), element.find('.words'), options);

        
      }
    };
  });
