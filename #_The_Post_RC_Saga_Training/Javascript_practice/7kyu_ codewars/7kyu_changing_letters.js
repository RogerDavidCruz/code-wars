function swap (string) {
    let newString = ''
    if (string.length === 0) return '';
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        newString += string[i].toUpperCase();
      } else {
        newString += string[i];
      } 
    }
    return newString;
}
  
//includes method 'a','e','i','o','u'
//at each letter capitalize at charAt
//can use for loop or map method
