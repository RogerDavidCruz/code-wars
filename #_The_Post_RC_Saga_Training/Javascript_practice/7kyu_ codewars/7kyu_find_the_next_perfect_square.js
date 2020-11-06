// 7 kyu - Find the next perfect square!
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))){
    return (Math.sqrt(sq) + 1)*(Math.sqrt(sq) + 1);
  }else{
    return -1;
  }
}

//prep
//parameters, return, examples, pseudo code
//parameters => an integer that is squared or not
//return => the following squared number or -1 if parameter is not a squared number
//examples => sq = 121, return 144, sq = 155, return -1
//pseudo code => find the Math.sqrt() of sq, if result is a whole integer, increase it by one,
// and square that new number, if result is not a whole integer, return -1
