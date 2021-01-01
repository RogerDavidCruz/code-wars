// 6 kyu - Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

//Solution #1
const high = x => {
  let wordsArr = x.split(' ');
  let topWordScore = 0;
  let topWord = '';
  
  for(let i = 0; i<wordsArr.length; i++){
    let word = wordsArr[i];
    let wordValue = 0;
    
    for(let j = 0; j<word.length; j++){
      wordValue += (word.charCodeAt(j)-96)

      if(wordValue > topWordScore){
        topWordScore = wordValue;
        topWord = word;
      }
    }
  }
  return topWord;
}

//Solution #2
const high = x => {
  const wordScores = x.split(' ').map(word => [...word].reduce((acc, cv) => acc + cv.charCodeAt(0)-96,0))
  return x.split(' ')[wordScores.indexOf(Math.max(...wordScores))];
}

//prep

//p: a setence string
//r: a word string with the highest score
//e: p: 'man i need a taxi up to ubud' r: 'taxi'
//p: 
//   #1) Begin by declaring a new array by spliting the string parameter into an array of words.
//   Then declare a variable to keep the highest score and the word with the highest score.
//   You'll need two for loops, one to iterate through the array of words and another to
//   iterate through the characters of each word. Within the 1st loop, create a variable for 
//   the element word in the array and another variable for the value of the word, then it 
//   continues into another for loop. Which Within the 2nd for loop, it adds and reassigns
//   the value of the wordValue variable basec on the charCodeAt value of the letter minus
//   96 which is the string character. Then have a conditional that keeps reassigning the 
//   values of the top word score and the top word based if its value is greater than the 
//   previous top word score. Finally return the top word that was assigned and left after
//   each word was passed through the conditional block.
//  
//   #2) Declare a new array with the char code values of each word. Split the string parameter
//   into an array of words. Then map through the array and spread the letters of each word in
//   the callback function, while also using the reduce method to add the char code values of 
//   each letter of each word element in the array. Next return the word from the original split
//   array of words by using the index of the max value number in the newly declared array of 
//   numbers. The spread operator will be needed again to check each element.
