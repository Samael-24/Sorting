// Rotate The Array

const arr = [1,2,3,4,5];
let key = 3;
const rev = (data,s,e)=>{
    while(s<e){
        let temp = data[s];
        data[s] = data[e];
        data[e] = temp;
        s++;
        e--;
    }
}
const rotate =(data,k)=>{

    rev(data,0,data.length -1)
    
    rev(data,0,k-1)
    
    rev(data,k,data.length -1)

    return data
}
console.log(rotate(arr,key))
