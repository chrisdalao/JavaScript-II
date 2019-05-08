// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

getLength(items, function () {
  console.log(items.length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

last(items, function () {
  console.log(items.pop())
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  z = x + y;
  return cb(z);
}

sumNums(8, 3, function (z) {
  console.log(z);
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  z = x * y;
  return cb(z);
}

multiplyNums(8, 3, function (z) {
  console.log(z);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  };

};

contains("sword", items, function(boolean){
  console.log(boolean);
});

/* STRETCH PROBLEM */

const numbers = [1, 2, 2, 3, 4, 5, 5];

function removeDuplicates(array, cb) {
  let dupFreeArr = [];
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  // dupFreeArr = array.map((n) => !dupFreeArr.includes(n) && dupFreeArr.push(n));
  dupFreeArr = array.filter(function(value, index, array){
    return array.indexOf(value) === index;
  })

  return cb(dupFreeArr);

}

removeDuplicates(numbers, function(dupFreeArr){
  console.log(dupFreeArr);
});


