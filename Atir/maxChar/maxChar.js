function maxChar(str) {
let obj={};
let max=0;
let maxChar="";


for (let char of str){

    if(!obj[char]){
        obj[char]=1;
    }else{
        obj[char]++;
    }
}
for(let i in obj){
   if(obj[i]>max){
       max=obj[i];
       maxChar=i;
   }
}
    return maxChar;
}
console.log(maxChar("abhvjhsdsdd"));