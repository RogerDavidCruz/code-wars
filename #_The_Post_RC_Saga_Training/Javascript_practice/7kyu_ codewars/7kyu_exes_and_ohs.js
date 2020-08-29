// 7 kyu - Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must
// return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let countX = 0;
  let countY = 0;
  let intoArray = str.toLowerCase().split('');
  for(let i = 0; i<=intoArray.length; i++){
    if(intoArray[i] === 'x'){
      countX += 1;
    }
    else if(intoArray[i] === 'o'){
      countY += 1;
    }
  }
  return countX === countY ? true : false;
}
