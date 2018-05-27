// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let vowels ='aeiou',
//         count = 0;
//     for(let letter of str.toLowerCase()){
//         if(vowels.includes(letter)) count++
//     }
//     return count;
// }

let vowels = (str) => {
    let regex = str.match(/[a|e|i|o|u]/gi);
    return regex ? regex.length : 0
};

module.exports = vowels;
