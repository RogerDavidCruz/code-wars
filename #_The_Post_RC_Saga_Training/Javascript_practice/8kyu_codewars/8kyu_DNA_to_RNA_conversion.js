// 8 kyu - DNA to RNA Conversion
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  return dna.split('').map(x => x === 'T' ? 'U' : x).join('');
}

