const findDigits=(n)=>{
    let integerArray=[];
    let arr = n.toString();
    let arr1 = arr.split('');
    let counter=0;
    for (let i=0;i<arr.length;i++){
        integerArray.push(parseInt(arr[i]))
    }
    for (let i=0;i<arr.length;i++){
        if (n%integerArray[i]===0){
            counter++;
        }
    }
    return counter;
}
findDigits(202);