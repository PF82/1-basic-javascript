// Iterate Through an Array with a For Loop
/*
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. 
This code will output each element of the array arr to the console:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition 
for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is 
i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop 
terminates because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
*/


// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = [];

for (let i = 0; i < myArr.length; i++) {
   total.push(myArr[i]);
}

console.log(total)

