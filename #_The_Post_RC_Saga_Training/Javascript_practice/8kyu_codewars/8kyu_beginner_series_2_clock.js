// 8 kyu - Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){
  let sumH = 0;
  let sumM = 0;
  let sumS = 0;
  if(0 <= h <= 23){
    sumH = h*(60/1)*(60/1)*(1000/1);
  }
  if(0 <= m <= 59){
    sumM = m*(60/1)*(1000/1);
  }
  if(0 <= s <= 59){
    sumS = s*(1000/1)
  }
  return sumH + sumM + sumS;
}
