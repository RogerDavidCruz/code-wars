// 8 kyu - Find out whether the shape is a cube
// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

var cubeChecker = function(volume, side){
  if(side <= 0 || volume <= 0) return false;
  return side * side * side === volume ? true : false;
};
