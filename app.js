// 1. Use ```.map``` to take the code from the array below, and place the results in a new array where each value is 5 more than it was in the the original array. Print the new array.

// ..
// let arr = [ 1, 2, 3, 4 ];
// let plus5 = []; 

let arr = [1, 2, 3, 4];

let plus5 = arr.map(
    (el)  => {
       return (el + 5);
    }
);

// // print the new array
 console.log(plus5);


// 2. Use ```.map``` to create a new array of objects where each object has a property for ```index``` and ```value``` based on the elements in the array. Print the new array of objects.


let arr2 = [1, 2, 3, 4];
let num_objects = [];

num_objects = arr2.map (
    (el, idx) => {
        return (
      {
            index: idx,
            value: el  
      }
    )
  }
);

// print the array of mapped 
console.log(num_objects);

// 3. Use ```.reduce``` to return the sum of all the numbers, each multiplied by 2. Print the final sum value.

let arr3 = [1, 2, 3, 4];

//  let sumOfNumbersTimesTwo = arr3.reduce(
//     (runningTotal, nextValueEl) =>
//     {  
//        return (runningTotal = runningTotal + (nextValueEl*2));
//     },0
// );

let sumOfNumbersTimesTwo = arr3.map(
    (el) =>
    {
        return (el*2);
    }
        ).reduce((total, el) => {
        return (total + el);
    });

console.log(sumOfNumbersTimesTwo);

// 4. Use .filter to return a new array that contains only the even numbers. Print the new array.

// ...
let arr4 = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
let even_vals = []; // new array to hold result

even_vals = arr4.filter(
    (el) => {
        // check to see if even
        return (el % 2 === 0);
    }
)

console.log(even_vals);

// 5. Use .map to take an array of names and return a new array that contains instances of objects you instantiated from the class below

class Student{
    constructor(name){
            this.name = name;
    }
}

const namesArray=["bob","mark", "kevin", "jody", "melissa"];

let namesInstances = namesArray.map(
    (el) => {
        return (
            new Student (el)
        )
    }
)

// new array completion of type Student, now print the name using foreach

namesInstances.forEach(
   (el) => {
       console.log(el.name);
   }
)
