// const arr =[1, 2, 3 ,40, 5]      // find second largest no
// let largest = arr[0]
// let secondlargest =arr[0]
// for (let i =0; i<= arr.length ; i++){
// if(arr[i] > largest){
//     largest = arr[i]
// }
// }
// for(let i =0;i<arr.length ; i++){
//     if(arr[i]> secondlargest && arr[i] != largest){
// secondlargest = arr[i]
//     }
// } 
// console.log(secondlargest)



//              FUNCTION
// function greet(){
//     // code
//     console.log("hello")
// }
//    greet()  // calling the function
//    let username = "avinash"
//    message = `hello, ${username} how are you!`
//    console.log(message)

   function greet(username){  //parameter
// code
console.log(`hello ${username}`)
   }
   greet("avinash")  // calling the function

   
 // find largest no using function (1, 2, 3 , 4 ,5)
 function largestnumber(array){
    let largestnumber = array[0];
    for ( let i = 0;i< array.length;i++){
        if(array[i] > largestnumber){
            largestnumber = array[i]
        }
    }
     console.log(largestnumber)
 }

 largestnumber([1, 2, 3, 4, 5])