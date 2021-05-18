// 6 kyu - Reverse every other word in the string
// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

reverse = (str) => str.split(' ').map((elem,idx) => idx % 2 != 0 ? elem.split('').reverse().join('') : elem).join(' ').trim();

//PREP

//P: a string of words
//R: a new string of words in reverse order per word
//E: "I really don't like reversing strings! => "I yllaer don't ekil reversing !sgnirts
//P: first break the string into an array of words. Then use the map method to
//   and at each element split the word into an array of letters, then use the reverse method
//   and finally join to return the new element within the new modified array. Finally
//   join all the words in the array to return the newly reverse words sentence. Also make
//   sure to check for the index at each element being a negative index to do every other
//   word in the string as reversed only.
