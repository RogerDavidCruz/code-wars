// 7 kyu - Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let vowelsCount = 0;
  for(let i =0; i<str.split('').length; i++){
    if(str.split('')[i] === 'a' || str.split('')[i] === 'e' || str.split('')[i] === 'i' || str.split('')[i] === 'o' || str.split('')[i] === 'u'){
      vowelsCount += 1
    }
  }  
  return vowelsCount;
}
