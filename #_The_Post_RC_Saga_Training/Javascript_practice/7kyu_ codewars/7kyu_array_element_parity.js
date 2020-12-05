// 7 kyu - Array element parity
// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

const solve = arr => arr.filter(num => !arr.includes(num*-1))[0];

//prep

//Parameters ----> an array of neg and pos numbs
//Returns -------> a number that does not match amongst the elements
//Example -------> param: [-3,1,2,3,-1,-4,-2]
//                 return: -4
//Pseudo code ---> filter the array with a callback function that 
//                 checks if the array does not include two elements
//                 that is both the same number as positive and negative
