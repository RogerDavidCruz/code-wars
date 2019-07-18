//coding challenge
//7kyu - Return the first M multiples of N

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Example:
// multiples(3, 5) should return [5, 10, 15]

//Solution
function multiples(m, n){
  const array=[];
  for (let i=1; i<=m;i++){
  array.push(n*i)
  }
  return array
}

//Notes
//create an empty array first, then a for loop to decide the number of indexes in the array that is based on the m parameter inside the function. The elements inside the array are multiples of the integer n.
//.push method adds one or more elements to the end of an array and returns the new length of the array.
