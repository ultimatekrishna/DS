//Learn to write code that checks if a given input reads the same forwards and backwards (palindrome). Essential for understanding string and number handling.


let num = 121121;

function palingdromenum(val) {
    if (val < 0) {
        return false;
    }
    val = Math.abs(val);
    let rev = 0
    while (val > 0) {
        rev = (rev * 10 ) + val % 10;
        console.log(rev)
        val = Math.floor(val / 10)
    }
    return rev === num;

}
let result = palingdromenum(num);
console.log(result);
