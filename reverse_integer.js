
//how to reverse an integer's digits without converting it to a string.
//imagining that number is not a fraction


let num = 1121;

function reversenum(val) {
    let rev = 0
    let last = 0;
    val = Math.abs(val);
        while (val > 0) {
            last = val % 10;
            rev = (rev * 10) + last
            val = Math.floor(val /10)
        }
    
    return (num < 0) ? -rev : rev;

}
let result = reversenum(num);
console.log(result);
