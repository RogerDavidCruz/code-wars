// 7 kyu - No Loops 1 - Small enough?
// https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2/train/javascript

const smallEnough = (a, limit) => a.every(num => num <= limit);

//prep

//parameter: array (a) and limit (value) [all numbers]
//return: true or false, depending that all elements in 
//        array are < or equal than limit
//example: [66, 101], 200, true
//         [78, 107, 115], 100), false
//pseudo code: use map method and check if all elements are > or
//             < than the limit variable. Then use a teranary to return
//             either true or false if condition is met
//time: ~20min
