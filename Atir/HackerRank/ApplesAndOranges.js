const applesAndOranges=(s,t,a,b,apples,oranges)=>{
    let counterOrange=0;
    let counterApple=0;
    let distApples=apples.map(dist=>Math.abs(dist+a)
    );
    let distOranges=oranges.map(dist1=>Math.abs(dist1+b)
    );
    for (let i=0;i<distApples.length;i++){
        if(distApples[i]>=s && distApples[i]<=t){
            counterApple++;
        }
    }
    for (let j=0;j<distOranges.length;j++){
        if (distOranges[j]>s && distOranges[j]<t){
            counterOrange++;
        }
    }
    console.log(counterOrange);
    console.log(counterApple);
}
applesAndOranges(4,8,12,4,[2,3,4,5,6],[8,4,6,7]);