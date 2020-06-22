
const vowels=(str)=>{
    const collection=['a','e','i','o'];
    let add=0;
    for (let char of str.toLowerCase()){
        if(collection.includes(char)){
            add++;
        }

    }
    return add;
}
console.log(vowels('abcdefghuoijl'));



//Recursive approach.












