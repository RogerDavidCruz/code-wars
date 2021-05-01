// 8 kyu - Alan Partridge II - Apple Turnover
// https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript

apple = (x) => Math.pow(parseInt(x), 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'

//PREP

//P: a number
//R: a string 
//E: '50' => 'It\'s hotter than the sun!!'
//P: use Math.pow to multiple the number x by 2 to resemble squaring a number and
//   then use a ternary statement to return two different options based on the first outcome.
