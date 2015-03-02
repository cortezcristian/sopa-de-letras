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
      template: '<div class="puzzle"></div><div class="words"></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var words = attrs.words.split(',');
        var gamePuzzle = wordfindgame.create(words, element.find('.puzzle'), element.find('.words'));
        
      }
    };
  });
