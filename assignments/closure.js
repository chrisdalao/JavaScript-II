// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const lastName = 'Dalao';
function greet() { 
  const firstName = 'Chris';
  console.log(`The name's ${lastName}, ${firstName} ${lastName}`);
}
greet();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
var counted = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  console.log(counted += 1);
};
counter();
counter();
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
var countee = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.

  const increment = () => {
    return countee += 1;
  }
  // `decrement` should decrement the counter variable and return it.
  const decrement = () => {
    return countee -= 1;
  }

  console.log(increment());
  console.log(decrement());

};

counterFactory();