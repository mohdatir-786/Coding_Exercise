const steps=(x1,v1,x2,v2)=>{
    let n=(x2-x1)/(v1-v2);
    if(Number.isInteger(n)){
        if (n>0 && n/2){
            return 'YES'
        }
        if (n<0 ){
            return 'NO'
        }
    }else {
        return  'NO'
    }

}
steps(28,8,96,2);