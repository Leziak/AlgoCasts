// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = (n) => {
    const midpoint = Math.floor((2 * n - 1) / 2);
    for(let row = 0; row < n; row++){
        let level = '';
        for(let column = 0; column < 2 * n - 1; column++){
            if(midpoint - row <= column && midpoint+row >= column) level+='#'
            else level+=' '
        }
        console.log(level)
    }

};

const pyramid = (n, row=0,level='') => {
    let midpoint = Math.floor((2 * n - 1) / 2);
    if(n===row) return;
    if(level.length===n){
        console.log(level);
        return pyramid(n,row+1);
    }
    if(midpoint)

    pyramid(n,row,level)
};

module.exports = pyramid;
