/*const fibonacci=(n)=>{
  let arr=[0,1];
  for (let i=1;i<n;i++){
      arr.push(arr[i-1]+arr[i]);
  }
  return arr[n];
}
console.log(fibonacci(50));
*/

/*

//Recursive approach.
//MEMOIZATION FOR REDUCING REDUNDANT FUNCTION CALLS.
function memoize(fn) {
    const cache={};
return function (...args) {
if(cache[args]){
  return cache[args];
}
const newArgsResult=fn.apply(this,args);
cache[args]=newArgsResult;
return newArgsResult;
}
}
const slowFibonacci=(n)=>{
    if (n<2){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}

const fibonacci=memoize(slowFibonacci);
console.log(fibonacci(10));

*/















