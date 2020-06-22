const purchasable=(keyboards,drives,b)=>{
    let max=-1;
    for (let i=0;i<keyboards.length;i++){
        for (let j=0;j<drives.length;j++){
            if(keyboards[i]+drives[j]<=b && keyboards[i]+drives[j]>max){
                max=drives[j]+keyboards[i];
            }
        }
    }
    return max

}
purchasable([2,3,5],[3,4,5,8,9],10);
