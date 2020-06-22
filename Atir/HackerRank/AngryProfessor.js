const angryProfessor=(k,a)=>{
    let counter=0;
    for (let i=0;i<a.length;i++){
        if(a[i]<=0){
            counter++;
        }
    }

    if (counter>=k){
        return 'NO'
    }else {
        return 'YES'
    }
}

angryProfessor(4,[-93 ,-86, 49 ,-62, -90, -63, 40 ,72, 11, 67]);