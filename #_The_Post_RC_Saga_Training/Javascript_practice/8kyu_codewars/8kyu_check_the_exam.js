// 8 kyu - Check the exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

//Solution 1

const checkExam = (array1, array2) => {
  let finalScores = [];
  array2.map((response, index) => response === "" ? finalScores.push(0) : response === array1[index] ? finalScores.push(4) : finalScores.push(-1));
  let total = finalScores.reduce((acc, cv) => acc + cv)
  return total <= 0 ? 0 : total;
 }
 
 //prep
 
 //parameters ------> two arrays of strings (first - right, second - answered)
 //return ----------> a number (summing up the totals)
 //examples --------> param) ["a", "a", "b", "b"], ["a", "c", "b", "d"] return: 6
 //pseudo code -----> use a method to compare both arrays and based if they match
 //                   at each element update a score variable that begins at 0
 //                   return the number at the end.
 //                   tools: includes, map, indexOf, reduce, and ternary 
 //time: >20 min
 

 //Solution 2

const checkExam = (array1, array2) => {
  const total = array2.reduce((acc, cv, idx) => cv === '' ? acc : cv === array1[idx] ? acc += 4 : --acc, 0);
  return total <= 0 ? 0 : total;
 }
 
 //Approach 2 Notes:
 // Use all three parameters of the reducer function that is passed
 // as a call back within the reduce method, and initialize the 
 // starting value for the reduce method to begin at. Then return 
 // the total score as zero if the summed value is negative.
 // Time: ~10min
