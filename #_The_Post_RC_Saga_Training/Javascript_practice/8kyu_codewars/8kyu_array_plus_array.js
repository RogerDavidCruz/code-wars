// 8 kyu - Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cv) => acc + cv)

//prep

//parameters -------> arr1 and arr2 are an array of numbers
//return -----------> a number that added up all the elements inside both arrays
//example ----------> param: arr1 = [1, 2, 3], arr2 = [4, 5, 6]
//                    return: 21
//pseudo code ------> using ES6 syntax implicit return begin by the using the spread syntax
//                    for each array parameter to take all the elements inside each array
//                    and spread it out inside a larger array encompassing by the brackets
//                    then use the reduce array method to iterate through the array to add
//                    all the numbers inside the larger array after spreading the two
//                    sub-arrays. acc is the accumulator and cv is the current value.
//                    the accumulator is storing the new summed value until the end of the 
//                    array and current value is where in the looped iteration is at before 
//                    adding to the accumulated summed value.
