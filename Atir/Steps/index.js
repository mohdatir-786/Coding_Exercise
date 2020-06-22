/*const step=(n)=>{

for(let i=0;i<n;i++){
    let str="";
    for(let j=0;j<n;j++){
        if(j<=i){
            str+="#"
        }else{
            str+=" ";
        }
    }
    console.log(str)
}
}
step(3);*/

//recursive approach

const step=(n,row=0,str="")=>{
  if(n===row){
     return;
  }
  if(n===str.length){
      console.log(str);
     return step(n,row+1)
  }
  if(str.length<=row){
      str=str + "#";
  }else{
      str=str + " ";
  }
  step(n,row,str);
}
step(10);