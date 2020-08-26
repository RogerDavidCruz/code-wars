// 7 kyu - Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C"
// and "G". You have function with one side of the DNA (string, except for
// Haskell); you need to get the other complementary side. DNA strand is never
// empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
  let answerArray = [];
  for(let i = 0; i<dna.length; i++){
    if(dna[i] === 'A'){
      answerArray.push('T')
    }
    if(dna[i] === 'T'){
      answerArray.push('A')
    }
    if(dna[i] === 'C'){
      answerArray.push('G')
    }
    if(dna[i] === 'G'){
      answerArray.push('C')
    }
  }
  return answerArray.join('')
}
