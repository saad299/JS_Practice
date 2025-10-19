// 4- To check if the string has any vowels and how many of them

let x = "Hello World"

if (typeof(x) !== "string") {
    console.log("It is not a string")
}
else {
    let vowels = "aeiouAEIOU"
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if (vowels.includes(x[i])) {
            count += 1
            }
        }
    console.log(`The string has ${count} vowels`)
}