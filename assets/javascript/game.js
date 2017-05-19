// Variables for Hangman
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSoFar = 0;
var lettersGuessed = [];
var wrongGuesses = [];
var blankArray = [];
var numBlanks = 0;
var wordList = ['pizza', 'pudding', 'tacos'];
var randomNumber = Math.floor(Math.random() * wordList.length);
var chosenWord = wordList[randomNumber];

console.log('original array: ' + wordList);


// Sync onkeyup to game and declare random word from array
function startGame() {
console.log('the chosen word is ' + chosenWord);

// Namke numBlanks equal to length of word
// Add number of underscore to blankArray
numBlanks = chosenWord.length;
for (var i = 0; i < chosenWord.length; i++) {
	blankArray.push('_');

console.log('the blankArray is currently ' + blankArray);
document.getElementById("output").innerHTML = blankArray.join(' ');
}
}










