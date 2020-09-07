// 5kyu - The Hashtag Generator
// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {
  let newArray = [];
  let wordInArray = str.trim('').split(' ');
  if(str.trim('') === '' || str.split(' ').join('').trim('').length >= 140) return false;
  for(let i = 0; i<wordInArray.length; i++){
    let capWord = wordInArray[i].charAt(0).toUpperCase() + wordInArray[i].trim('').slice(1);
    newArray.push(capWord)
  }
  return '#' + newArray.join('');
}
