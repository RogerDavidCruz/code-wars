// 8 kyu - Regular Ball Super Ball
// https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript

var Ball = function(ballType) {
  this.ballType = ballType || 'regular'
 };
 
 //prep
 
 //p: a string of super or undefined
 //r: a string of super or regular
 //e: ball1.ballType => "regular" , ball2.ballType => "super"
 //p: if ballType equals a ballType then return that value otherwise return 'regular'
 //   using this from Object oriented programing and || operator to check for undefined.
