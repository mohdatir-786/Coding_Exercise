/*
const pyramid=(n)=>{
    for(let i =0;i<n;i++){
        let str='';
        for (let j=0;j<2*n-1;j++){
            const midPoint=Math.floor((2*n-1)/2);
            if(midPoint-i<=j && midPoint+i>=j){
                str+='#';
            }else{
                str+=' ';
            }
        }
        console.log(str);
    }

}
pyramid(5)

 */
//Recursion Approach.
const pyramid=(n,row=0,str='')=>{
    const midPoint=Math.floor((2*n-1)/2);
    if(n===row){
       return;
    }
    if(str.length===(2*n-1)){
        console.log(str);
        return pyramid(n,row+1);
    }
    let add;
    if(midPoint-row<=str.length && midPoint+row>=str.length){
    add='#';
    }else{
        add=' '
    }
    pyramid(n,row,str+add);
}

pyramid(10);
























