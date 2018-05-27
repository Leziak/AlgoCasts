// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let arr = [],
//         str = '',
//         count = 0;
//     for(i=0;i<n;i++){
//         while(count<n){
//             if(count<=i) str+='#';
//             else str+=' ';
//             count++;
//         }
//         arr.push(str);
//         str='';
//         count=0;
//     }
//     arr.forEach(el=>console.log(el));
// }

// const steps = (n) => {
//     for(i=0;i<n;i++){
//         let str = '';
//         for(j=0;j<n;j++){
//             if(j<=i) str+='#';
//             else str+=' ';
//         }
//         console.log(str);
//         str=''
//     };
// };

const steps = (n, row = 0, stair = '') => {
    if(n===row) return;
    if(stair.length===n) {
        console.log(stair);
        return steps(n,row + 1)
    }
    if(stair.length<=row) stair+="#";
    else stair+=" ";

    steps(n,row,stair);

};

module.exports = steps;
