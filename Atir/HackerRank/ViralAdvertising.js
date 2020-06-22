const viralAdvertising=(n)=>{
    let arrayInteger=[];
    let ArrayLikes=[];
    let dayLike=Math.floor(5/2);
    let dayShare=5;
    for (let i=n;i>0;i--){
        arrayInteger.push(i);
    }
    let reversedArray=arrayInteger.reverse();
    for (let i=1;i<reversedArray.length;i++) {
        dayShare = dayLike * 3;
        dayLike = Math.floor(dayShare / 2);
        ArrayLikes.push(dayLike);
    }
    return ArrayLikes.reduce((cur,rev)=>rev+cur)+2;

}
viralAdvertising(5);