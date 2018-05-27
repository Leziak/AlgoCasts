// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {},
        max = 0,
        maxChar = '';
    for(let char of str){
        if(char in obj) obj[char]++;
        else obj[char]=1;
    }
    for(let key in obj){
        if(obj[key]>max){
            max=obj[key];
            maxChar=key;
        }
    }
    return maxChar;
    // return Object.keys(obj).sort((a,b) => obj[b]-obj[a])[0];
    // Does the same thing but looks more fancy!
}

module.exports = maxChar;
