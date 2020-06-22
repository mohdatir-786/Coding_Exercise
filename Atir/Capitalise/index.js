const capitalise=(str)=>{
    let result=str[0].toLocaleUpperCase();
    for(let i=1;i<str.length;i++){
        if(str[i-1]===' '){
            result=result+str[i].toLocaleUpperCase();
        }else{
            result=result+str[i];
        }
        }
    return result
}

console.log(capitalise("atir insaf nice man"));











/*const capitalise=(str)=>{
    let arr=[];
    for(let i of str.split(' ')){
        arr.push(i[0].toLocaleUpperCase()+ i.slice(1))
    }
    return arr.join(' ')
}
console.log(capitalise("atir insaf ali"))*/