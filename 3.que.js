// find how many time array is rotated
// const arr = [5,4,1,2,3];
// let i = 1;

// find the second largest element
// const arr = [20,10,11,19]
// const sortR = (data)=>{
//     data.sort(function(a, b){return a - b})
//     return data[data.length - 2];
// }
// console.log(sortR(arr))

// 
const func = (arr1,arr2)=>{
    let i =0; let j=0; let carry =0; let result =[];
    while(i <arr1.length || j<arr2.length){
        if(i<arr1.length){
            carry += arr1[i];
            i++;
        }
        if(j<arr2.length){
            carry += arr2[j];
            j++;
        }

        
        result.push(carry%10)
        
        carry = Math.floor(carry/10);
        
    }

    if(carry){
        result.push(carry);
    }
    return result.reverse();

}
console.log(func([9,9,9],[9,9,9]));

const func2 = (l1, l2) => {
    let i = 0, j = 0, carry = 0, result = [];
    while (i < l1.length || j < l2.length) {
        if (i < l1.length) {
            carry += l1[i];
            i++;
            
        }
        if (j < l2.length) {
            carry += l2[j];
            j++;
            
        }
        result.push(carry % 10);
        
        carry = Math.floor(carry / 10);
        
    }

    if (carry) {
        result.push(carry);

    }
    return result;
}

 const arr1 = [2, 5, 6]
 const arr2 = [3, 6, 2]

 console.log(func2(arr1, arr2));
 console.log(func2([8,8,8], [8,8,8]));
 console.log(888+888)

