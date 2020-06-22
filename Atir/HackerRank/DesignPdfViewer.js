const designPdfViewer=(h,word)=>{
    let counter=0;
    let countedCharArray=[];
    let indexOfCharArray=[];
    let arrayOfHeights=[];
    let max,finalArea,givenStrWidth;
    let arrAlphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let givenCharacterString=word.split('');
    givenStrWidth=givenCharacterString.length;
    let uniqueString=[...new Set(givenCharacterString)];
    for (let i=0;i<uniqueString.length;i++){
        counter=0;
        for (let j=0;j<givenCharacterString.length;j++){
            if (uniqueString[i]===givenCharacterString[j]){
                counter++;
            }
        }
        countedCharArray.push(counter);

    }
    for (let i=0;i<uniqueString.length;i++){
        for (let j=0;j<arrAlphabet.length;j++){
            if (uniqueString[i]===arrAlphabet[j]){
                indexOfCharArray.push(j);
            }
        }
    }
    for (let i=0;i<indexOfCharArray.length;i++){
        for (let j=0;j<h.length;j++){
            if (indexOfCharArray[i]===j){
                arrayOfHeights.push(h[j]);
            }
        }
    }

    max=Math.max(...arrayOfHeights);
    finalArea=`${max*givenStrWidth} `;
    return finalArea;

}
designPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],'zaba');