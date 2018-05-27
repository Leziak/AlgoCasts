// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const palindrome = (str) => str===str.split('').reverse().join('');

const palindrome = (str) => str.slice(0,str.length/2).split('').every((char,index)=> str[index]===str[str.length-1-index]);

// const palindrome = (str) => {
//     let res = '';
//     for(let i = str.length-1; i>=0; i--) res+=str[i];
//     return res===str;
// }


module.exports = palindrome;
