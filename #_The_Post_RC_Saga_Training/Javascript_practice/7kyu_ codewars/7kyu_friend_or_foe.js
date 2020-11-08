// 7 kyu - Friend or Foe?
// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends){
  return friends.filter((name) => name.length === 4);
}

//prep

//parameters ----> an array of strings
//return ----> an array of strings with only 4 characters per string
//examples ----> parameter: ["Ryan", "Kieran", "Mark"] , return: ["Ryan", "Mark"]
//pseudo code ----> use filter javascript method, and check if the length of the string is 4
