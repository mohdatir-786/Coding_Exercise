const fizzBuzz=(n)=>{
   let multiple_3="Fizz" ;
   let multiple_5="Buzz";
   let common="FizzBuzz";
   for(let i=1;i<=n;i++){
       if(i%3===0 && i%5===0){
           console.log(common);
       }else if(i%5===0){
           console.log(multiple_5);
       }else if (i%3===0){
           console.log(multiple_3);
       }else{
           console.log(i);
       }
   }
}
console.log(fizzBuzz(35));