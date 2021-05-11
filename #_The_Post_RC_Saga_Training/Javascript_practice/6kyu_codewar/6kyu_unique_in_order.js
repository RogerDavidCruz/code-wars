// 6 kyu -Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
  let finalArr = [];
  if(typeof iterable === 'string'){
    let charsArr = iterable.split('');
    for(let i = 0; i<charsArr.length; i++){
      if(charsArr[i] != charsArr[i-1]){
        finalArr.push(charsArr[i])
      }
    }
    return finalArr;
  }
  if(Array.isArray(iterable)){
    for(let i = 0; i<iterable.length; i++){
      if(iterable[i] != iterable[i-1]){
        finalArr.push(iterable[i])
      }
    }
    return finalArr;
  }
}

//PREP

//P: a sequence of characters or numbers as a string or as an array
//R: an array of string characters or numbers in the same order as the original without repeats
//E: 'ABBCcAD' => ['A', 'B', 'C', 'c', 'A', 'D'] or [1,2,2,3,3] => [1,2,3]
//P: first identify param is a string or an array with typeof, if it's an array
//   use that array within a for loop to determine which element to push into the empty
//   array variable declared. If it's a string, split the string and do the same thing.
