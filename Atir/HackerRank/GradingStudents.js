const gradingStudents=(grades) => {
    let arr = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            arr.push(grades[i]);
        }
        if(grades[i]>=38){
            if(Math.ceil(grades[i]/5)*5-grades[i]<3){
                grades[i]=Math.ceil(grades[i]/5)*5;
                arr.push(grades[i]);
            }else{
                arr.push(grades[i]);
            }

        }

    }
    return arr
}
gradingStudents([33,38,45,83]);
