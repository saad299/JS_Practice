// 3- To check which number in an array is the greatest

arr1 = [2, 3, 678, 345]

if (arr1 <= 1) {
    console.log(`The array is empty or contains only one element`);
}
else if (arr1.length === 0) {
    console.log(`array is empty`);
}
else if (arr1.length === 1) {
    console.log(`The array contains only one element: ${arr1[0]}`)
}
else {
    let max = arr1[0];
    for (let i = 1; i <= arr1.length; i++) {
        if (arr1[i] > max) {
            max = arr1[i];
            }
        }
    console.log(`The greatest number in the array is ${max}`);
}
console.log(`This array has ${arr1.length} elements`)