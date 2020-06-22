const beautifulDays=(i,j,k)=>{
    let counter=0;
    let counter1=0;
    let arr=[];
    let arr1=[];
    let arrReverse=[];
    let arrReverse1=[];
    let str='1230'
    for (let init=i;init<=j;init++){
        arr.push(`${init}`);
    }
    for (let i=0;i<arr.length;i++){
        arr1.push(parseInt(arr[i]));
    }
    for (let i=0;i<arr.length;i++){
        arrReverse.push(arr[i].split('').reverse().join(''))
    }
    for (let i=0;i<arrReverse.length;i++){
        arrReverse1.push(parseInt(arrReverse[i]));
    }

    for (let i=0;i<arr.length;i++){
        if (Math.abs(arr1[i]-arrReverse1[i])%k===0){
            counter1++;
        }
    }
    return counter1
}

beautifulDays(20,23,6);
