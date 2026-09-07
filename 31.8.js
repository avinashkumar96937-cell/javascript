// bubble shorting order
// arr = [34, 31, 23, 12, 45]
// for(i = 0 ;i< arr.length ; i++){
//     for(j = 0; j < arr.length -1-i; j++){
//         if (arr[j]>arr[j + 1]){
//             [arr[j], arr[j + 1]] =[arr[j + 1] , arr[j]]
//         }
//     }
// }
//     console.log(arr)

function greet() {
    console.log("hello world")
}
greet()
function sum (a,b){         // a,b parameter
    console.log(a + b)
}
sum(4, 4)       // argument



/*6. Find the Largest Digit
function largestDigit(n) {

}
Input: 58329
Output: 9
*/
function largestDigit(num) {
    let largestno = 0;
    while(num > 0){
let lastdigit = num % 10 ;
if( lastdigit > largestno){
    largestno = lastdigit
}
    number = Math.floor(num /10);
    }
    console.log(largestno)
}
largestDigit(6726524) // Output: 9
