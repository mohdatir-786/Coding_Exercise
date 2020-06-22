function permutationEquation(p) {
    let arrayY=[];
    let val,val1,val2;
    for (let i=0;i<p.length;i++){
        val=p.indexOf(i+1)+1;
        val1=p.indexOf(val)+1;
        arrayY.push(val1);

    }
    return arrayY;
}
permutationEquation([5,2,1,3,4])