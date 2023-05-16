// Higher order functions
// Callback functions


// function twoSquared() {
//    return 2 * 2;
// }

// function threeSquared() {
//    return 3* 3;
// }





// function copyArrayAndSquareNums(arr) {
//    const output = [];

//    for (let i = 0; i < arr.length; i++) {
//       output.push(arr[i] ** 2);
//    }
//    return output;
// }

// const nums = [1, 2, 3, 4];
// const res = copyArrayAndSquareNums(nums);
// console.log(res);



// function copyArrayAndDivideByTwo(arr) {
//    const output = [];

//    for (let i = 0; i < arr.length; i++) {
//       output.push(arr[i] / 2);
//    }
//    return output;
// }

// const result2 = copyArrayAndDivideByTwo(nums);
// console.log(result2);



function copyArrayAndDoSmth(arr, instructions) {
   const output = [];

   for (let i = 0; i < arr.length; i++) {
      output.push(instructions(arr[i]));
   }
   return output;
}

function numSquared(num) {
   return num * num;
}

function divideByTwo(num) {
   return num / 2;
}

const res1 = copyArrayAndDoSmth([1, 2, 3, 4], numSquared); // numSquared - callback
const res2 = copyArrayAndDoSmth([10, 20, 30, 40], divideByTwo); // divideByTwo - callback 
console.log(res1); // [ 1, 4, 9, 16 ]
console.log(res2); // [ 5, 10, 15, 20 ]

