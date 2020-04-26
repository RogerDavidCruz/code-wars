// 8 kyu - Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
//
// Sam Harris => S.H
// Patrick Feeney => P.F

const abbrevName = (name) =>
  name.split(' ')
  .map((string) => string[0].toUpperCase())
  .join('.');
