const countingTreeHeight=(n)=>{
    let counter=1;
    let arr=[];
    let sortedArray;
    for (let i=n;i>0;i--){
        arr.push(i);
    }
    sortedArray=arr.reverse();
    for (let i=0;i<n;i++){
        if(sortedArray[i]%2===0){
            counter=counter+1;
        }else {
            counter=counter*2;
        }
    }
    return counter;
}

countingTreeHeight(8);