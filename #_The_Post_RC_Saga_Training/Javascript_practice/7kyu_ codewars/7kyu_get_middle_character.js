// 7kyu - Get Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
//
// You are going to be given a word. Your job is to return the middle character
// of the word. If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
//
// #Examples:
//
// Kata.getMiddle("test") should return "es"

function getMiddle(s) {
  for (let i = 0; i < s.length; i++) {
    if(s.length % 2 == 0){
      let medium = (s.length/2) - 1;
      let additional = medium + 1
      let evenResult = s.charAt(medium).concat(s.charAt(additional));
      return evenResult;
    } else{
      let oddMedium = Math.ceil(s.length/2) - 1;
      let oddResult = s.charAt(oddMedium);
      return oddResult;
    }
  }
}
