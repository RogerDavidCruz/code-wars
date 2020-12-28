// 8kyu - Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

const gooseFilter = birds => {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(word => !geese.includes(word));
};

//prep

//p: array of strings
//r: new array of strings with filtered out words
//e: p: ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//   r: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//p: use the filter method and in the callback function, filter each word that does
//   not include that same word in the main parameter array.
