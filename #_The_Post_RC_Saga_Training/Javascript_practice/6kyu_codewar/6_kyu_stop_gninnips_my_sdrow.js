// 6 kyu - Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(str){
  let answer = [];
  console.log(str)
  let list = str.split(' ');
  for(let i=0; i<list.length; i++){
    if(list[i].length >= 5){
      answer.push(list[i].split('').reverse().join(''));
    }else{
      answer.push(list[i]);
    }
  }
  return answer.join(' ');
}
