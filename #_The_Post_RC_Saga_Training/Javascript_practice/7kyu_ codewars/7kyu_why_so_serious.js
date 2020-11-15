// 7kyu - Why so serious?
// https://www.codewars.com/kata/596e64188c92ceca7d00004f/train/javascript

function whySoSerious(str) {
  return str.includes('Jc') && str.includes('7s') && str.includes('5s') && str.includes('As') && str.includes('9c');
}

//prep

//parameter -----> str is a string of numbers and letters
//return --------> boolean true or false
//example -------> param: "10cJs8s6c6s" , return: false
//                 param: "4s8cJcJs6c6s9s7s9c4c5sAs2s" , return: true
//pseudo code ---> split the string into numeric and letter pairs
//                 use the includes method for each string pair that spells Joker
//                 and return true or false by using the logical operator &&
