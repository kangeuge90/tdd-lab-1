"use strict";
// Internet Solution -----------------------
function translator(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    str = str.toLowerCase();
    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        console.log(newStr);
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        // regular expression, searches string - find me one thing that matches the bracket values
        // g meaning global - tests all of the matches,  without g only returns first match
        // if str.match returns something falsey, return 0, firstMatch gets set to 0
        // RegEx (google for more)

        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        console.log(newStr);
        return newStr;
    }

}



module.exports = translator;

// Build Specifications
// Translation must all be done in a translate function that takes a string parameter and 
//      returns the translated Pig Latin string.
// The translation functionality must be developed with TDD using tests on the translate function.
// If desired, you may also create other helper functions and optionally test them.

// Additional Build Specifications
// Convert each word to lowercase before translating.
// If a word starts with a vowel, just add “way” onto the ending.
// If a word starts with a consonant, move all of the consonants that appear 
//      before the first vowel to the end of the word, then add “ay” to the end of the word.

// Hints
// Treat “y” as a consonant.
// Start with the simplest cases and work up, for example…
// words that start with vowels… write tests for several different starting vowels
// words that start with vowels with capital letters are converted to lowercase
// words that start with one consonant… write tests for the second letter being several 
//       different vowels
// words that start with two consonants
// words that start with more consonants


// My Solution -----------------------
// function translator(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let newStr = "";

//     str = str.toLowerCase();
//     // check first letter if vowel or not
//     //          if it is a vowel: simply add "way" to the end
//     if (vowels.indexOf(str[0]) > -1) { // if the first letter is a vowel
//         newStr = `${str}way`;
//         console.log(newStr);
//         return newStr;
//     }
//     if (vowels.indexOf(str[0]) < 0) { // if the first letter is a consonant
//         for (let i = 0; i < str.length; i++) {

//         }

//     } else { // word with no vowels

//     }

//     // if consonant:  move all of the consonants that appear before the first vowel to the end.
//     //                                      then add "ay" to the end of the word.

//     // if only consonants and no vowels:  add "vray" to the end.


// }