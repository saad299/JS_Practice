//1- To print 10 fibonacci numbers

let n1 = 0
let n2 = 1

console.log(n1)
console.log(n2)

for (let i = 0; i <= 7; i++) {
    let sum = n1 + n2
    n1 = n2
    n2 = sum
    console.log(sum)
}