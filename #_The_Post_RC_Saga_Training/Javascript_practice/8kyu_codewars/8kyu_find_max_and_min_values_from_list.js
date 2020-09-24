// 8kyu - Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
  return list.reduce((a,b) => Math.min(a,b))
}

var max = function(list){
    return list.reduce((a,b) => Math.max(a,b))
}
