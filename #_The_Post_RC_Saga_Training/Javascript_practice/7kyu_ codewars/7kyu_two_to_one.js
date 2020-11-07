// 7 kyu - Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  let combinedS = (s1 + s2).split('').sort();
  return combinedS.filter((char, index) => combinedS.indexOf(char) === index).join('');
}

//prep

//parameters, return, examples, pseudo code

//paramaters---> s1 is a string of letters between a to z
//               s2 is a string of letters between a to z
//returns ---> return a sorted string that is the longest possible,
//             with no repeated letters
//examples ---> params: s1: aretheyhere, s2: yestheyarehere, 
//              return: aehrsty
//pseudo code ---> concat both s1 and s2, split the string, sort the characters, 
//                 join both strings, filter out the index and value if they match
//                 it removes duplicates, then join the indexes of array
