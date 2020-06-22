const sum=(n)=>{
    let minSum=0;
    let maxSum=0;
    let val=n.sort();
    for (let i=0;i<val.length-1;i++){
        minSum=minSum +val[i];
    }
    for (let i=1;i<val.length;i++){
        maxSum=maxSum + val[i];
    }
    console.log(`${minSum} ${maxSum}`)
}
sum([6,3,2,5,8]);
