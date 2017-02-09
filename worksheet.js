/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
function sumOfArray(arr) {
	 var s = 0
	 for (var index = 0; index < arr.length; index++) {
	 	s = s+arr[index]
	 }
	 return s
}
// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.
var maxOfArray = function(arr) {
	var biggestNumber = 0
	for (var index = 0; index < arr.length; index++) {
		if (arr[index] > biggestNumber) {
			biggestNumber = arr[index]
		}
	} 
	return biggestNumber
}

// /**
//  * PART 2
//  *
//  * Write a function isVowel() that takes a character (i.e. a string of length 1)
//  * as input and returns true if it is a vowel, false otherwise.
//  */
var isVowel = function(char) {
	var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
	for (var index = 0; index < vowel.length; index++) {
		if (vowel[index] === char) {
			return true
		}
	}
	return false
}

// /**
//  * Part 3
//  *
//  * Define a function reverse() that computes
//  * the reversal of a string. For example,
//  * reverse("skoob") should return the
//  * string "books".
//  */
var reverse = function(str) {
 	var temp = []
	var stringSplit = str.split('')
   for (var index = stringSplit.length; index >= 0; index--) {
       temp.push(stringSplit[index])
   }
    return temp.join('')

 }
// *
//  * Part 4
//  *
//  * write a function the returns a fizzbuzz string for an input number. 
//  A fizzbuzz string is defined as the following:
//  For every number from 1 to the input number...
//  * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
//  * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
//  * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
//  * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//  For example, the fizzbuzz string for the number 3 is "..fizz"
//  For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"

var fizzbuzz = function(num) {
	var fizzbuzz = '';
	for (let i = 1; i <= num;  i++) {	
		if ((i % 3) && (i % 5)) {
			fizzbuzz += '.';
		}
		else { 
			if (!(i % 5) && !(i % 3)) {
			fizzbuzz += 'fizzbuzz';
			}

			else {
				if (!(i % 3) && (i % 5)) {
					fizzbuzz += 'fizz';
				}

				else {
					fizzbuzz += 'buzz';
				} 
			}
		} 
	}

	return fizzbuzz;;
};

console.log(fizzbuzz(4));

// /**
//  * Part 5
//  *
//  * Write a function findLongestWord() that takes a string of 
//  words and returns the longest word.
//  * i.e. findLongestWord("a book full of dogs") should return "book"
//  */
var findLongestWord = function(words) {
	var maxLengthWord = '';
	var arrayOfWord = words.split(/\W+/);

    maxLengthWord = arrayOfWord[0];

	for (var i = 1; i < arrayOfWord.length; i = i + 1) {
		if (maxLengthWord.length < arrayOfWord[i].length) {
			maxLengthWord = arrayOfWord[i]
		}
	}
	return maxLengthWord;

}

console.log(findLongestWord("a book full of dogs"));

// /**
//  * PART 6
//  *
//  * write a function that returns the Greatest Common Denominator of two numbers
//  * - if no GCD exists, return 1
//  */
var GCD = function(num1, num2) {
	var greatestCommonDenom = 1


	for (var i = 1; i <= num1; i++) {
		if (num1% i === 0) { 
			for (var j = 1; j <= num2; j++) {
				if (num2% j === 0 && i === j){
					greatestCommonDenom = j
				} 
			}
		}
	}

	return greatestCommonDenom
}
