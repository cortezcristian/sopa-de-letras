'use strict';

var wordsDic = [
'the',
'be',
'of',
'and',
'ant',
'to',
'in',
'he',
'have',
'it',
'that',
'for',
'they',
'bird',
'with',
'as',
'not',
'on',
'she',
'at',
'by',
'this',
'we',
'you',
'do',
'but',
'from',
'or',
'which',
'one',
'would',
'all',
'will',
'there',
'say',
'who',
'make',
'when',
'can',
'more',
'if',
'no',
'man',
'out',
'other',
'so',
'what',
'time',
'up',
'go',
'about',
'than',
'into',
'could',
'state',
'only',
'new',
'year',
'some',
'take',
'come',
'these',
'know',
'see',
'use',
'get',
'like',
'then',
'first',
'any',
'work',
'now',
'may',
'such',
'give',
'over',
'think',
'most',
'even',
'find',
'day',
'also',
'after',
'way',
'many',
'must',
'look',
'before',
'great',
'back',
'through',
'long',
'where',
'much',
'should',
'welcome',
'people',
'down',
'own',
'just',
'because',
'good',
'each',
'those',
'feel',
'seem',
'how',
'high',
'too',
'place',
'little',
'world',
'very',
'still',
'nation',
'hand',
'old',
'life',
'tell',
'write',
'become',
'here',
'show',
'house',
'both',
'between',
'need',
'mean',
'call',
'develop',
'under',
'last',
'right',
'move',
'thing',
'general',
'school',
'never',
'same',
'another',
'begin',
'while',
'number',
'part',
'turn',
'real',
'leave',
'might',
'want',
'point',
'form',
'off',
'child',
'few',
'small',
'since',
'against',
'ask',
'late',
'home',
'interest',
'large',
'person',
'end',
'open',
'public',
'follow',
'during',
'present',
'without',
'again',
'hold',
'govern',
'around',
'possible',
'head',
'consider',
'word',
'program',
'problem',
'however',
'lead',
'system',
'set',
'order',
'eye',
'plan',
'run',
'keep',
'face',
'fact',
'group',
'play',
'stand',
'increase',
'early',
'course',
'change',
'help',
'line'
];

var getRandomWords = function(){
            
   var  limit = 10,
        lower_bound = 0,
        upper_bound = 199,
        unique_random_numbers = [],
        unique_random_words = [];

    while (unique_random_numbers.length < limit) {
        var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
        if (unique_random_numbers.indexOf(random_number) == -1) { 
            // Yay! new random number
            unique_random_numbers.push( random_number );
            unique_random_words.push( wordsDic[random_number] );
        }
    }

    return unique_random_words;
    
}

var words, options, gamePuzzle, wordfindelement;

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
        $rootScope.solve = function(){
            wordfindgame.solve(gamePuzzle, words);
        } 

        $rootScope.start = function(){
            words = getRandomWords();
            options = {height:8, width:8};
            gamePuzzle = wordfindgame.create(words, wordfindelement.find('.puzzle'), wordfindelement.find('.words'), options);
        } 
      },
      link: function postLink(scope, element, attrs) {
        //var words = attrs.words.split(',');
        wordfindelement = element;
        words = getRandomWords();
        options = {height:8, width:8};
        gamePuzzle = wordfindgame.create(words, element.find('.puzzle'), element.find('.words'), options);

        
      }
    };
  });
