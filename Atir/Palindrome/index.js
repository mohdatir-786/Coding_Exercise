/*function palindrome(str) {
  let result=str.split("").reduce((char,rev)=>rev+char,"");
  return result===str;

}
palindrome("abba");
*/

function palindrome(str) {
 return str.split("").every((num,i)=>num===str[str.length-i-1]);
}

console.log(palindrome("insaf"));