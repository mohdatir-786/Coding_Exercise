const drawingBook=(n,p)=>{
    let counterFront=0;
    let counterBack=0;
    if (p%2!==0){
        for (let i=1;i<=p-1;i+=2){
            counterFront++;
        }
    }else {
        for (let i=0;i<p;i+=2){
            counterFront++;
        }
    }

    if (n%2!==0){
        for (let i=n;i>p+1;i-=2){
            counterBack++;
        }
    }

    if (n%2===0){
        if(p%2!==0){
            for (let j=n;j>p;j-=2){
                counterBack++;
            }
        }else{
            for (let j=n;j>p+1;j-=2){
                counterBack++;
            }
        }
    }
    if (counterFront>counterBack){
        return counterBack;
    }else {
        return counterFront;
    }
}

drawingBook(70809,46090);