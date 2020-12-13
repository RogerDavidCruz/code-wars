// 8 kyu - Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
  let occurences = x.reduce((acc, cv) => cv === 'good' ? acc+=1 : acc, 0);
  if(occurences >= 3 ){
    return 'I smell a series!';
  }
  else if(occurences === 1 || occurences === 2){
    return 'Publish!'
  }
  else{
    return 'Fail!'
  }
}

//prep

//p: array 
//r: string 'Publish!' or 'Fail!'
//e: ['bad', 'bad', 'bad']), 'Fail!'
//   ['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!'
//p: filter method for one or two 'good' for 'Publish!' otherwise 
//   if three or greater return 'I smell a series!', otherwise 'Fail'
//time ~15min
