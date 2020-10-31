// 8 kyu - Will you make it?
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg*fuelLeft;
};

//prep

//miles/gallon * gallon = mile
//mpg * fuelleft
//compare that multiplied value with the distance to pump
//if the multiplied value is less than or equal to the distance to pump 
//return true otherwise false
