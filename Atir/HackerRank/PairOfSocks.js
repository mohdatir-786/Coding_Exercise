const socks=(n,ar)=>{
    let sortedArray=ar.sort((a,b)=>b-a);
    let uniqueArray=[...new Set(ar)];
    let countedArray=[];
    let  counter1=0;
    for (let i=0;i<uniqueArray.length;i++){
        let counter=0;
        for (let j=0;j<sortedArray.length;j++){
            if(uniqueArray[i]===sortedArray[j]){
                counter++;
            }
        }
        countedArray.push(counter);
    }
    for (let i=0;i<countedArray.length;i++){
        if(countedArray[i]%2===0 || countedArray[i]%2===1){
            counter1+=Math.floor(countedArray[i]/2);

        }
    }
    return counter1;


}
socks(9,[10,20,20,10,10,30,50,10,20]);