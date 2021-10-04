const translator = require('./piglatin');

describe('translator', function() {

    // general test w/ vowel beginning words
    test('"pig" should return as "igpay"', function() {
        expect(translator("pig").toEqual('igpay'));
    });


    // test to accept multiple words
    test("'words aplenty' should return as 'ordsway aplenty'", function() {
        expect(translator('words aplenty').toEqual('ordsway aplenty'));
    });


    // test to accept only strings

    // test('only strings should be accepted, other inputs will give error alert', function() {
    //     expect(translator("1042021").toEqual(""));
    // });

    // test to reject empty answer

    // test('no answer should give error alert', function() {
    //     expect(translator("").toEqual(""))

    // });


    // OPTIONAL OBJ-----------------------------------------------------------------

    // test to convert to lower case
    test('"BIG" should return "igbay"', function() {
        expect(translator("BIG").toBe("igbay"));
    });

    // NEW general test w/ vowel beginning words implemented, old test should be obsolete

    // test("", function() {

    // });


    // If a word starts with a consonant, move all of the consonants that appear 
    //      before the first vowel to the end of the word, then add “ay” to the end of the word.

    // test("", function() {

    // });



    // OPTIONAL OBJ END-------------------------------------------------------------
})


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