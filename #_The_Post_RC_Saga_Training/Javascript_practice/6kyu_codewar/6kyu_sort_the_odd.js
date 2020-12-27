// 6 kyu - Sort the odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

const sortArray = array => {
  const oddNums = array.filter(num => num % 2).sort((a,b) => a - b)
  return array.map((num) =>  num % 2 ? oddNums.shift() : num)
}

//prep

//p: array of numbers.
//r: array of sorted odd numbers and even numbers in the same place
//e: [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//p: Define a new array by filtering through the parameter array using the filter
//   method to filter for odd numbers and then sort them using the sort method. 
//   Then map through the original parameter array to create a new array, inside the
//   call back function have a ternary operator that checks for even number elements,
//   when it is true then pop the first element of the new array and return the removed
//   element as the new replacement for the new mapped array. If false, return the 
//   odd number element into the newly mapped array.
