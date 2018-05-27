// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// let fib = (n) => {
//     let arr = [0,1];
//     for(let i=1;i<n;i++){
//         arr.push(arr[i-1]+arr[i])
//     }    
//     return Number(arr[arr.length-1]);
// }

// let fib = (n) => {
//     if(n<2) return n;
//     return fib(n-1) + fib(n-2);
// }

let fib = (n, arr = [0,1]) => {
    if(n<arr.length) return arr[arr.length-1];
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fib(n,arr);
}

module.exports = fib;
