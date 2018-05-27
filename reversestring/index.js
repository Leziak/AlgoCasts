// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverse = (str) => {
//     let result = "";
//     for(let i=str.length-1;i>=0;i--) {
//         result += str[i];
//     }
//     return result;
// };

// const reverse = (str) => str.split('').reverse().join('');

const reverse = (str) => {
    let result = '';

    for(let char of str){
        result = char + result;
    }

    return result;
};

// const reverse = (str) => {
//     return str.split('').reduce((acc,char) => {
//         return char + acc;
//     },'')
// };

module.exports = reverse;
