// var myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);



// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(i) {
//   console.log("Found Waldo at index " + i + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



function findWaldo(arr, found) {
  arr.forEach(function (arr, index) {
    if (arr === "Waldo") {
      found(index);   // execute callback
    }
  })
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(result) {
//   console.log("The result is:", result);
// });


// function example (input, callback) {
//   if(typeof(callback) !== "function") {
//     console.log("error");
//   }
// }