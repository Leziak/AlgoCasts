// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// const reverseInt = (n) => {
//     if(n===0) return n;
//     n = n.toString().split('').reverse().join('');
//     for(i=0;i<n.length;i++){
//         if(n[i]!=="0"){
//            return n[n.length-1]==="-" ? Number("-" + n.slice(i,n.length-1)) : Number(n.slice(i,n.length))
//         }
//     }
// };

const reverseInt = (n) => parseInt(n.toString().split('').reverse().join(''))*Math.sign(n);

module.exports = reverseInt;
