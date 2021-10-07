const translator = require('./piglatin');

describe('translator', function() {

    // words that start with vowels… write tests for several different starting vowels
    test('words that start with "a"', function() {
        expect(translator('action')).toEqual('actionway');
    })

    test('words that start with "e"', function() {
        expect(translator('elect')).toBe('electway');
    })

    test('words that start with "i"', function() {
        expect(translator('idea')).toBe('ideaway');
    })


    // words that start with vowels with capital letters are converted to lowercase

    test('words that start with "A"', function() {
        expect(translator('Arrive')).toBe('arriveway');
    })

    test('words that start with "O"', function() {
        expect(translator('Octopus')).toBe('octopusway');
    })

    test('words that start with "U"', function() {
        expect(translator('Under')).toBe('underway');
    })

    // words that start with one consonant… write tests for the second letter being several 
    //       different vowels
    // consonant-a
    test('word that starts with consonant and then lowercase vowel', function() {
            expect(translator('way')).toBe('ayway');
        })
        // consonant-u
    test('word that starts with consonant and then vowel', function() {
        expect(translator('bug')).toBe('ugbay');
    })

    // words that start with two consonants
    test('words that start with two consonants "flay"', function() {
        expect(translator('flay')).toBe('ayflay');
    })

    test('words that start with two consonants "play"', function() {
        expect(translator('play')).toBe('ayplay');
    })

    test('words that start with two consonants "tray"', function() {
        expect(translator('tray')).toBe('aytray');
    })

    // words that start with more consonants
    test('words that start with three consonants "shred"', function() {
        expect(translator('shred')).toBe('edshray');
    })

    test('words that start with three consonants "splash"', function() {
        expect(translator('splash')).toBe('ashsplay');
    })

    // words with no vowels : does it error, does it have a new rule?
    // test('word with no vowels "glycyl"', function() {
    //     expect(translator('glycyl')).toBe('');
    // }),





    // OPTIONAL OBJ-----------------------------------------------------------------

    // TEST:non string entrees, digits

    // TEST: multiple word strings (consonant start word, vowel start word)
    //                              (vowel start word, consonant start word)
    //                              (consonant, consonant)
    //                              (vowel, vowel)

    // NEW TEST: general test w/ vowel beginning words implemented, old test should be obsolete

    // test("", function() {

    // });


    // TEST: If a word starts with a consonant, move all of the consonants that appear 
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