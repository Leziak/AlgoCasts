let findOdd = (min=0, max=100) => {
    for(let i = min;i<=max;i++) {
        if(i%2!==0) console.log(i)
    }
}

let sumRange = (min, max) => {
    let arr  = [];
    for(let i = min; i <= max;i++) {
        arr.push(i);
    }
    return arr.reduce((a,b)=> a+b);
}

let decrNum = (num, min, decrement) => {
    let arr = [];
    while(num>min) {
        arr.push(num);
        num-=decrement;
    }
    return arr;
}

const shuffle = (arr) => {
    let counter = arr.length, index, temp;

    while(counter) {
        index = Math.floor(Math.random() * counter);
        counter--;

        temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

console.log(shuffle([1,2,3,4,5,6,7,8,9,10]))