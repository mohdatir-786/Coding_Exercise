const libraryFine=(d1,m1,y1,d2,m2,y2)=>{
    let fine=0;
    if (y1>=1 && y2<=3000){
        if(y1<=y2 && (m1<=m2 && d1<=d2)){
            return fine;
        }
        if (d1>d2 && (m1===m2 && y1===y2)){
            fine=15*(d1-d2);
            return fine;
        }
        if (m1>m2 && y1===y2){
            fine=500*(m1-m2);
            return fine;
        }
        if (y1>y2){
            fine=10000*(y1-y2)  ;
            return fine;
        }
    }else{
        return fine;
    }

}
libraryFine(2,7,1014,6,6,2015);