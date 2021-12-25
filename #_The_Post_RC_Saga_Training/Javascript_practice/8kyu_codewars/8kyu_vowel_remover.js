// One Solution

const shortcut = string => {
    let result = [];
    string = string.split('');
    
    for(let i = 0; i < string.length; i++) {
      if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        result.push('')
      } else {
        result.push(string[i])
      }
    }
    return result.join('');
  }

/*
  Time: O(1)
  Space: O(n) being the array length and string length
*/

// Second Solution

const shortcut2 = string => {
    return string.replace(/[aeiou]/g , '')
}

/*
  Time: O(1)
  Space: O(1)
*/

// Third Solution

const shortcut3 = string => {
    return string.split('').filter(val => ['a', 'e', 'i', 'o', 'u'].indexOf(val) === -1).join('');
}

/*
  Time: O(1)
  Space: O(n) extra space required when changing string to array
*/

console.log(shortcut3('hello'))
console.log(shortcut3('codewars'))
console.log(shortcut3('goodbye'))
console.log(shortcut3('HELLO'))