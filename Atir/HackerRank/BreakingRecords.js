const breakingRecords=(scores)=>{
    let minScore=scores[0];
    let maxScore=scores[0];
    let minCounter=0;
    let maxCounter=0;
    let arr1=[];
    for (let i=0;i<scores.length;i++){
        if(scores[i]>maxScore){
            maxScore=scores[i];
            maxCounter++;
        }else if(scores[i]<minScore){
            minScore=scores[i];
            minCounter++;
        }
    }
    arr1.push(maxCounter);
    arr1.push(minCounter);
    return arr1;

}
breakingRecords([10,5,20,20,4,5,2,25,1]);
