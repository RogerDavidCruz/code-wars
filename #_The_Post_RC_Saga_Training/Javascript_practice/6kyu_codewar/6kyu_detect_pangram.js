// 6 kyu - Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

isPangram = (string) => {
  let letters = string.toLowerCase().split('').filter(x => x != ' ' && x != '.' && x != ',' && isNaN(x) === true);
  let uniqueLetters = [...new Set(letters)];
  return uniqueLetters.length === 26;
}

//PREP

//P: a string 
//R: a boolean either true or false
//E: "The quick brown fox jumps over the lazy dog." => true
//P: first begin by spliting the string into an array of letters, then
//   filter out the empty spaces. Next sort the letters in alphebetical order.
//   Next filter out any duplicates. And next check if the length of the array
//   matches to 26 letters in the alphabet. May also need to filter out the period,
//   numbers, and other characters that are not letters.
