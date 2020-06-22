const countingBirds=(arr)=>{
    let counter=0;
    let counterArray=[];
    let max,val;
    let sortedArray=[...new Set(arr)];
    for (let i=0;i<sortedArray.length;i++){
        counter=0;
        for (let j=0;j<arr.length;j++){
            if (sortedArray[i]===arr[j]){
                counter++;
            }
        }
        counterArray.push(counter);
    }

    max=0;

    for (let i=0;i<counterArray.length;i++){
        if (counterArray[i]>max){
            max=counterArray[i];
            val=sortedArray[i];
        }
    }
    return val;
}
countingBirds([1,2,3,2,4,2,3,4,2,3]);
