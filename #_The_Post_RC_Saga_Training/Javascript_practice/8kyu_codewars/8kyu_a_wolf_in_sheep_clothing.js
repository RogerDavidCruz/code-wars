// 8kyu - A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

const warnTheSheep = queue => {
  const sheepInDanger = (queue.length-1) - queue.findIndex(element => element === 'wolf');
  return sheepInDanger === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`;
}

//prep

//p: an array of strings containing sheep and wolf
//r: a string, changes depending where wolf is found in the array
//e: p: ["sheep", "sheep", "sheep", "wolf", "sheep"] r: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//   p: ["sheep", "sheep", "wolf"] r: "Pls go away and stop eating my sheep"
//p: use the findIndex method to return the index of the 'wolf' element. Then take the length-1 of the array,
//   and subtract it by the index value where 'wolf' was found. To state that number using template literal string,
//   otherwise return a different string if 'wolf' was found at the end of the array (start of the queue).
