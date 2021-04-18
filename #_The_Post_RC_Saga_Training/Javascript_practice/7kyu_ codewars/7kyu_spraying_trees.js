// 7 kyu - Spraying trees
// https://www.codewars.com/kata/5981a139f5471fd1b2000071/train/javascript

task = (w, n, c) => {
  let x = c*n;
  let name = w === 'Monday' ? 'James' : w === 'Tuesday' ? 'John' : w === 'Wednesday' ? 'Robert' : w === 'Thursday' ? 'Michael' : w === 'Friday' ? 'William' : '';
  return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
}

//prep

//p: w is weekday, n is number of trees, c is cost of 1L of liquid for 1 tree 
//r: a string that with template literals using w, name, n, and x
//e: task('Monday',15,2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
//p: multiply c and n for x, then use a ternary statement to find the name based 
//   on the weekday it was on. Then insert that name value variable into the 
//   template literal string.
//time: 8 min
