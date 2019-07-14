// Coding Challenge
//6kyu - IQ test

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
// ##Examples :
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd


//Solution

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});

  let odd = numbers.filter(function(el){ return el % 2 === 1});
  let even = numbers.filter(function(el){ return el % 2 === 0});

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

//Notes on methods used in this challenge.

// .map = method creates a new array with the results of calling a provided function on every element in the calling array.
// .filter = method creates a new array with all elements that pass the test implemented by the provided function.
// .indexOf = method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// .length = property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
