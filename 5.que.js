// add two arrays
const arr1 = [1, 2, 3];
let str = "";
for (let i of arr1) {
    str += i;


}
console.log(str)

const arr2 = [4, 5, 6];
let str2 = "";
for (let i of arr2) {
    str2 += i;
}
console.log(str2)
const addi = (num1, num2) => {
    num1 = Number.parseInt(num1)
    num2 = Number.parseInt(num2)

    return num1 + num2
}
console.log(addi(str, str2))

function sumOfTwoArrays(arr1, arr2, outputArr) {

    const num1 = BigInt(arr1.join('')); // convert arr1 to BigInt

    const num2 = BigInt(arr2.join('')); // convert arr2 to BigInt

    const sum = num1 + num2; // calculate sum as BigInt

    const sumArr = sum.toString().split('').map(Number); // convert sum to array of digits


    for (let i = 0; i < sumArr.length; i++) {

        outputArr[i] = sumArr[sumArr.length - 1 - i]; // copy digits to output array in reverse order

    }


    if (outputArr[0] === 0) {

        outputArr.shift(); // remove leading zero if present

    }

}
