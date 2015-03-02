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
      templateUrl: '/views/wordfinder.html',
      link: function postLink(scope, element, attrs) {
        var words = attrs.words.split(',');
        var gamePuzzle = wordfindgame.create(words, element.find('.puzzle'), element.find('.words'));
        
        scope.solve = function(){
            wordfindgame.solve(gamePuzzle, words);
        } 
      }
    };
  });
