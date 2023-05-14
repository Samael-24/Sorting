// find the median of two merged array
// arr1 = [1,2] and arr2 =[3]

const arr = [1,2,3,4];
const arr1 = [1,2,3];
const med = (data)=>{
    let n;
    let med;
    if(data.length % 2 == 0){
        n = data.length
        med = Math.floor((n/2)+(n/2 + 1))/2
        return med;
    }
    else if(data.length%2 != 0){

        n = data.length
        med = (n+1)/2; 
        return med;
    }
}
// console.log(med(2,3,4,5,1))
console.log(med(arr))
console.log(med(arr1))

// const arr2 = [1,2,3];
// const med2 = (data)=>{
//     let n = data.length;
//     let mid = Math.floor(n+1)/2
//     return mid
// }
// console.log(med2(arr2))
