// //      ARRAY
//  const arr=[1,3,5,true,false,"hello"]
//  console.log(arr[0])
//  arr[0]=1.4
//  console.log(arr)
//  const arr1 = new Array(1,true,false,"helo")
//  console.log (arr1)
//  arr.push(3.2) //add after last element
//  console.log(arr)
//  arr.pop()  // remove the last element
//  arr.unshift(2)// insert at 0th index
// arr.shift()  // remove from the 0th index
// arr.includes(4)     // if include then true otherwise false
// console.log(arr.includes(4))



const prise =[10, 20, 30, 40, 50]
const newprice = [  ]   //price will be 2x

for(i =0;i< prise.length; i++){
    newprice.push(prise[i] * 2);
}
console.log(newprice)  

number =[8,2 ,3 ,4 ,5]  // find biggest number

let maxnumber = number[0]
for( let i=0;i< number.length ; i++){
    if(  number[i] > maxnumber){
        maxnumber = number[i]
    }
} console.log(maxnumber);

// find smallest no
const numbers =[12,3, 454,]
let smallest = numbers[0]; // Start by assuming the first number is the smallest

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i]; // Update if a smaller number is found
  }
}

console.log(smallest); // Output: 4

