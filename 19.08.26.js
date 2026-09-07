// DO WHILE
// let y =10
// do {
//     console.log(y);
//     y = y+ 1
// }while(y<=10); 
// console.log(" hello");


//                                  ARRAY

// arr1=["hello",true, false , 89 , "world", undefined, 73.3 ,[23, true]]
// console.log(arr1.length)   //gives the length the array


// // print all the element inside the array using loop
// for( let i = 0; i< arr1.length; i++){
//     console.log(arr1[i])
// }0
// where world see terminate the program
arr2=["hello",true, false , 89 , "world", undefined, 73.3 ,[23, true]]

for(i = 0; i< arr2.length;i++ ){   
    console.log(arr2[i])
if(typeof arr2[i]== "number"){
   break
}
}

// for(i = 0; i<=arr2.length;i++ ){ 
// if(typeof arr2[i]== "number"){
//     console.log(arr2[i])
    
// }
// }
//               BREAK AND CONTINOU

// for( i= 0 ;i<=10 ;i++){
//     if(i % 3 == 0){
//         continue
//     }
//     console.log(i)
// }

// for(j=1;j<=10;j++){
//     if(j % 3 == 0){
//         console.log(j)
//         break
//     }
// }