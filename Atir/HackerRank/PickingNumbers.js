const pickingNumbers=(a)=>{
    let sortedArray=a.sort((a,b)=>b-a);
    let uniqueArray=[...new Set(a)];
    let countedArray=[];
    let  counter1=0;
    let  sum=0;
    let arrayFinal=[];
    let val;
    for (let i=0;i<uniqueArray.length;i++){
        let counter=0;
        for (let j=0;j<sortedArray.length;j++){
            if(uniqueArray[i]===sortedArray[j]){
                counter++;
            }
        }
        countedArray.push(counter);
    }
    let sortedUnique=[...new Set(sortedArray)];
    for (let i=0;i<countedArray.length;i++){
        if (sortedUnique[i+1]-sortedUnique[i]<=1){
            sum=countedArray[i]+countedArray[i+1];
            arrayFinal.push(sum);
        }

    }
    val=Math.max(...arrayFinal);
    console.log(val);
}
pickingNumbers([1,2,2,3,1,2]);
