//Coding Challenge
//7kyu - Binary Addition

//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//The binary number returned should be a string.

//Solution
function addBinary(a,b) {
  let sum = a + b;
  return sum.toString(2)
}

//Notes
//The toString() method returns a string representing the specified Number object.
//toString() syntax needs a radix
//radix - An integer in the range 2 through 36 specifying the base to use for representing numeric values.
