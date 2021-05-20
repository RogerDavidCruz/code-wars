// 6 kyu - Simple Fun #305: Typist
// https://www.codewars.com/kata/592645498270ccd7950000b4/train/javascript

typist = (s) => {
    let isCapsLockOn = false;
    let charsArr = s.split('');
    let count = 0;
    
    for(let i = 0; i<charsArr.length; i++){
      count++
      if(charsArr[i] === charsArr[i].toUpperCase()){
        if(!isCapsLockOn){
          isCapsLockOn = !isCapsLockOn
          count++
        }
      }else{
        if(isCapsLockOn){
          isCapsLockOn = !isCapsLockOn
          count++
        }
      }
    }
    return count
  }
  
  //PREP
  
  //P: a string
  //R: a number
  //E: "Aa" => 4
  //P: first declare a variable to keep track of the typing count, next
  //   split the string into an array of characters, also declare a variable
  //   to keep track if the capslock button is on or off. Next create a for loop
  //   that increase the count in each iteration but use conditional logic to 
  //   check whether the letter is capital or not, and if it is capitalized then
  //   check whether the capsLock button is turned on or not. Depending on whether
  //   the capslock button is true or false, increase the count. Since if the next
  //   letter is lowercase and you need to change back from capslock to no capslock
  //   then that is an extra typing count increase of 1. The same applies when 
  //   dealing with the capital letter from lowercase to uppercase. But if the next
  //   letter when it is two capitals back to back, then the count should only
  //   increase by one.
  