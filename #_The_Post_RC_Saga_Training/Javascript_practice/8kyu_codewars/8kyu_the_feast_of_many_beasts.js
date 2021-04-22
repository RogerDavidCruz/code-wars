// 8 kyu - The Feast of Many Beasts
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

feast = (beast, dish) => {
  return beast.charAt(beast.length - 1) === dish.charAt(dish.length -1) && beast.charAt(0) === dish.charAt(0) ? true : false;
}

//prep

//p: two strings
//r: a boolean determined by the string containing the first and last letter from beast
//e: "great blue heron" => "garlic naan" => true
//p: charAt at first and last of the sentences then compare each and see if the dish
//   agrees to, otherwise it is the feast of many beasts
