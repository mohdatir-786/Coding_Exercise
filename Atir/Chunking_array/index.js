/*const chunk=(array,size)=>{
    let chunked=[];
    for(let element of array){
        let last=chunked[chunked.length-1];
        if(!last || chunked.length===size){
            chunked.push([element])
        }else{
           last.push(element) ;
        }
    }
    return chunked;
}
console.log(chunk([2,3,3,4,5,6,8,5,6],6));*/

const chunk=(array,size)=>{
  let index=0;
  let chunked=[];
  while (index<array.length){
      chunked.push(array.slice(index,index+size));
      index=index+size;
  }
  return chunked;
}
console.log(chunk([1,2,3,3,4,4],3));


















































