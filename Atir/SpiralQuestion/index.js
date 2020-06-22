const spiral=(n)=>{
    const results=[];
    for (let i=0;i<n;i++){
        results.push([]);
    }
    let counter=1;
    let startRow=0;
    let endRow=n-1;
    let startCol=0;
    let endCol=n-1;
    while(startRow<=endRow && startCol<=endCol){
        //first row loop
        for (let i=startCol;i<=endCol;i++){
            results[startRow][i]=counter;
            counter++;
        }
        startRow++;
        //for side column.
        for (let i=startRow;i<=endRow;i++){
            results[endCol][i]=counter;
            counter++;
        }
        endCol--;
        for(let i=endCol;i<=startCol;i--){
            results[endRow][i]=counter;
            counter++;
        }
        endRow--;
        for (let i=endRow;i>=startRow;i--) {
            results[i][startCol] = counter;
            counter++;
        }
        startCol++;

    }
    return results;
}

console.log(spiral(2));