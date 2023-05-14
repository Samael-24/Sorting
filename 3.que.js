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

        // console.log(carry,"Before Pushing")
        result.push(carry%10)
        // console.log(carry%10)
        // console.log(carry,"after Pushing")
        // console.log(Math.floor(carry/10))
        carry = Math.floor(carry/10);
        
    }

    if(carry){
        result.push(carry);
    }
    return result.reverse();

}
console.log(func([9,9,9],[9,9,9]));

