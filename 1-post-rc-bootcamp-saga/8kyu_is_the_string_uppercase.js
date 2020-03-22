//8kyu - Is the string uppercase?
//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


//Long Response
String.prototype.isUpperCase = function() {
  return this.split('').every(letter => letter === letter.toUpperCase())
 }

//Short Response
String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
 }
