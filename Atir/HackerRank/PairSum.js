const  pairSum=(n,k,ar)=>{
    let counter=0;
    for (let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if((ar[i]+ar[j])%k===0){
                counter++;
            }
        }
    }

    return  counter;
}


pairSum(6,3,[2,3,4,5,6,7]);