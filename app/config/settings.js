/**
 * @desc WordFind Settings
 */

// Change dictorionary here 
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
            
   // Change the limit of words here
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

// Global variables definition
var words, options, gamePuzzle, wordfindelement;

// Set board size
options = {height:8, width:8};

// Change site menu settings here
var menu = {};
menu.playOrRestart = "Play / Restart";
menu.toggleWords = "Toggle Words";
menu.howToPlay = "How To Play";
menu.resolveIt = "Resolve"; // idea: change this to Give Up
menu.modalHowTo = {};
menu.modalHowTo.title = "How to play?";
menu.modalHowTo.explainTop = "Just hit the first letter and the last:";
menu.modalHowTo.explainBottom = "";
menu.modalHowTo.closeButton = "Close"; // idea: change this to I get it
menu.modalPlayAgain = {};
menu.modalPlayAgain.title = "You win!";
menu.modalPlayAgain.explainTop = "Play again?";
menu.modalPlayAgain.explainBottom = "";
menu.modalPlayAgain.closeButton = "No";
menu.modalPlayAgain.okButton = "Yes";
menu.showWords = true;

