// const arr1 = [2,3,4,4,4];
// const arr2 = [1,2,4];

// const addi = (nums1,nums2)=>{

//     let i = nums1.length -1;
//     let j = nums2.length -1;
//     let sum = 0;
//     let carry = 0;
//     let res = [];
//     while(i >= 0 || j >= 0){
//         sum = nums1[i] + nums2[j] + carry;
//         res.push(sum%10);
//         carry = Math.floor(sum/10);
//         i--;
//         j--;
//     }
//     return res.reverse();
// }
// console.log(addi(arr1,arr2))

function sumOfTwoArrays(arr1, arr2, outputArr) {

    const n = arr1.length;

    const m = arr2.length;

    let carry = 0;


    for (let i = n - 1, j = m - 1, k = outputArr.length - 1; k >= 0; i--, j --, k --) {

        const digit1 = i >= 0 ? arr1[i] : 0;

        const digit2 = j >= 0 ? arr2[j] : 0;

        const sum = digit1 + digit2 + carry;

        outputArr[k] = sum % 10;

        carry = Math.floor(sum / 10);

    }

}


const arr1 = [
    1,
    2,
    6,
    2,
    4
];
const arr2 = [7, 5, 6];
const outputArr = Array(Math.max(arr1.length, arr2.length) + 1).fill(0);
sumOfTwoArrays(arr1, arr2, outputArr);
console.log(outputArr.join(' '));
