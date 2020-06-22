const bill=(bill,k,b)=>{
    let totalSumOfBill=0;
    let halfOfBill,val;
    for(let i=0;i<bill.length;i++){
        totalSumOfBill+=bill[i];
    }
    halfOfBill=totalSumOfBill/2;
    for (let i=0;i<bill.length;i++){
        if(i===k ){
            if(b===halfOfBill){
                val= (totalSumOfBill-bill[i])/2;
                console.log(b-val)
            }
            if (b===(totalSumOfBill-bill[i])/2){
                console.log("Bon Appetit")
            }
        }


    }

}
bill([3,10,2,9],1,7);
