const anagrams=(strA,strB)=>{
return helpAnagram(strA)===helpAnagram(strB);
}
const helpAnagram=(str)=>{
   return str.replace(/[^\w]/g,"").toLocaleLowerCase().split("").sort().join("");
}
console.log(anagrams("Hello!!! There","There!! hello"));




/*const anagrams=(strA,strB)=>{
let aObj=helpAnagram(strA);
let bObj=helpAnagram(strB);
//below obj.keys take out all the keys from object.
if(Object.keys(aObj).length!==Object.keys(bObj).length){
    return false;
}
for(let i in aObj){
    if(aObj[i]!==bObj[i]){
        return false
    }
}
return true
}

const helpAnagram=(str)=>{
    let obj={};
    let characterArray=[];
    //below replace function eliminates all the stuff except alphabets and then turned to lower case.
    for(let char of str.replace(/[^\w]/g,"").toLocaleLowerCase()){
        if(!obj[char]){
            obj[char]=1;
        }else{
            obj[char]++;
        }
    }
   return obj
}
console.log(anagrams("coolasddtir!!","coolInsadsdf!!!"));*/