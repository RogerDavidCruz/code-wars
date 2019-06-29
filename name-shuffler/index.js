// Name Shuffler Write a function that returns a string in which firstname is swapped with last name.
//

//solution

function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}
