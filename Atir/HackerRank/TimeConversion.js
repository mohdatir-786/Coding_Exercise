const timeConversion=(s)=>{
    let str=s;
    let truncated=s.slice(0,8);
    let n=truncated.split(':');
    if(str[8]==='A'){
        if(str[0]==='1' && str[1]==='2'){
            n[0]='00';
            console.log(n.join(':'));
        }else{
            console.log(truncated);
        }

    }
    if(str[8]==='P'){
        if(str[0]==='0' || (str[0]==='1' && str[1]!=='2')){
            n[0]=(parseInt(n[0])+12).toLocaleString();
            console.log(n.join(':'));
        }else{
            console.log(truncated);
        }
    }
}

timeConversion('07:43:35PM');