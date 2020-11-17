// 7kyu - Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  let reversedChars = [];
  let initialReverse = str.split('').reverse('').join('').split(' ');
  for(let i = 0; i<initialReverse.length; i++){
    reversedChars.unshift(initialReverse[i])
  }
  return reversedChars.join(' ')
}

//prep

//parameters ------> str is a string with words and spaces
//return ----------> a string that is the reverse of each word in str with spaces retained
//example ---------> param: "This is an example!" return: "sihT si na !elpmaxe"
//pseudo code -----> declare variable as empty array, split the string into characters, reverse characters,
//                   join characters and split individual words, then use a for loop with unshift method 
//                   for each indexes to add the start of the array and use the join with space included
//                   to change the return back to a string data type
