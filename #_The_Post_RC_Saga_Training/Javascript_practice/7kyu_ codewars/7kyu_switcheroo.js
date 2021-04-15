// 7 kyu - Switcheroo
// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

function switcheroo(x){
  return x.split('').map((val, idx) => val === 'a' ? 'b' : val === 'b' ? 'a' : 'c').join('');
}

//prep

//parameter: x is a string
//return: new string with a and b characters 
//example: 'aabacbaa' --> 'bbabcabb'
//pseudo: use a method that splits the string, then map to check if the
//        index is a then swap it with b, and if it's b swap with a, and
//        and if it is c leave it alone, then join all the strings.
//time: 4 minutes
