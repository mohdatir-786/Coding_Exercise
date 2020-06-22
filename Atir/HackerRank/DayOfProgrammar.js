const programmer=(year)=>{
    let dayOfProgrammar;
    if(year>=1700 && year<=2700){
        if(year===1918){
            dayOfProgrammar=`26.09.${year}`;
            return dayOfProgrammar;
        }

        if(year>=1700 && year<=1917){
            if(year%4===0){
                dayOfProgrammar=`12.09.${year}`;
                return  dayOfProgrammar;
            }
            if(year%4!==0){
                dayOfProgrammar=`13.09.${year}`;
                return dayOfProgrammar;
            }
        }

        if(year>=1918 && year<=2700){
            if(year%400===0 || (year%4===0 && year%100!==0)){
                dayOfProgrammar=`12.09.${year}`;
                return dayOfProgrammar;
            }else{
                dayOfProgrammar=`13.09.${year}`;
                return  dayOfProgrammar;
            }
        }

    }
}
programmer(2016);
