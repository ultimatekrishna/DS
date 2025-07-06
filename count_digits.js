// count the number of digits in a given number 


let num = 256;

function countnum(num) {
    num = Math.abs(num);
    let count = 0;
    if (num == 0) {
        return 1;
    }
    while (num > 0) {
        num = Math.floor(num / 10)
        count++;
    }
    return count;

}
let result = countnum(num);
console.log(result);
