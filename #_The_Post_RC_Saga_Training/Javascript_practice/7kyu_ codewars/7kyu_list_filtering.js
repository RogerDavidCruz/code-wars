// 7kyu - List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript

//Solution 1

//prep
//declare an empty array
//loop through the array and find numbers in the array
//if a number is found, push the number into the empty array
//return the array of numbers

function filter_list(l) {
  const array_of_nums = [];
  for(let i=0; i<=l.length; i++){
    if(typeof l[i] === 'number'){
      array_of_nums.push(l[i])
    }
  }
  return array_of_nums;
}

//Solution 2

//prep
//use the filter method to remove any index in the 
//array of l that is not a number and it returns the new 
//array with numbers only

function filter_list(l) {
  return l.filter(x => typeof x === 'number');
}
