// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     console.log(stringA.toLowerCase().split('').sort());
//     console.log(stringB.toLowerCase().split('').sort());
//     return stringA.toLowerCase().split('').sort().join('')===stringB.toLowerCase().split('').sort().join('');
// }

// const anagrams = (stringA,stringB) => {
//     let A = stringA.toLowerCase().match(/\w/g);
//     let B = stringB.toLowerCase().match(/\w/g);
//     let obj1 = {};
//     let obj2 = {};
//     for(let el of A){
//         if(obj1[el]) obj1[el]++
//         else obj1[el]=1
//     }
//     for(let el of B){
//         if(obj2[el]) obj2[el]++
//         else obj2[el]=1
//     }
//     console.log(obj1);
//     console.log(obj2);
//     if(Object.keys(obj1).length!==Object.keys(obj2).length)  return false;
//     for(let el in obj2){
//         if(obj1[el]!==obj2[el]) return false;
//     }
//     return true;
// };

const anagrams = (stringA, stringB) => {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    if(Object.keys(aCharMap).length!==Object.keys(bCharMap).length) return false;
    for(let key in aCharMap){
        if(aCharMap[key]!==bCharMap[key]) return false;
    }
    return true;
};

const buildCharMap = (str) => {
    const charMap = {};
    for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
        charMap[char]= charMap[char] + 1 || 1
    }
    return charMap;
};

module.exports = anagrams;
