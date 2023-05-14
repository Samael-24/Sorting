// reverse an array
const rev =(data)=>{
    let res = []
    let key = 0;
    for(let i = data.length - 1;i>=0;i--){
        res[key] = data[i];
        key++
    }
    return res
    
}
console.log(rev([6,5,4,3,2,1]));

// reverse the string
let str = "My Name is What"
const revS = (data)=>{
    let n = data.length -1;
    let newS = "";
    for(let i = n;i>=0;i--){
        newS += data[i];
    }
    return newS
}
console.log(revS(str))

