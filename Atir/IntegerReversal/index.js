/*const revNumber=(val)=>{
   let isSign = Math.sign(val);
    let temp = 0;
    val =Math.abs(val);
   let len = val
    console.log("val",len.toString().length);
    for(let i=0;i<len.toString().length;i++){
        temp = temp*10 + Math.floor(val % 10);
        val=val/10;
        console.log("cool",temp);
    }
    return isSign*temp
}
console.log(revNumber(-1234));*/

function revInt(int) {
    let isSign=Math.sign(int);
let n=int.toString().split("").reverse().join("");
return isSign*parseInt(n);
}
console.log(revInt(-12345));
