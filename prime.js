//2- To check if a number is prime or not

let n1 = 20

if (n1 <= 1) {
    console.log(`${n1} is not a prime number`)
}
else if (n1 === 2) {
    console.log(`${n1} is a prime number`)
}
else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n1); i++) {
        if (n1 % i === 0) {
            console.log(`${n1} is not a prime number`)
            isPrime = false;
        break;
        }
    }
    if (isPrime) {
       console.log(`${n1} is a prime number`)
    }
}