// 5- To add and give the sum of the numbers

let orignum = 2435435475423
let num = orignum

if (typeof(num) !== "number") {
    console.log(`${orignum} is not a number`)
}

let sum = 0
let count = 0
while (num > 0) {
    let digit = num % 10
    sum += digit
    num = Math.floor(num/10)
    count++
}
console.log(`The length of the number ${orignum} is ${count} and its sum is ${sum}`)