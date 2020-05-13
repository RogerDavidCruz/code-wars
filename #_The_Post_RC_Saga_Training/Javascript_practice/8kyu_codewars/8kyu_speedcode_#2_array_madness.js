// 8 kyu - SpeedCode #2 - Array Madness
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
  let sumA = 0;
  let sumB = 0;
  let newA = a.map(x => x**2);
  let newB = b.map(x => x**3);
  for(let i =0; i<newA.length; i++){
    sumA += newA[i];
  }
  for(let i =0; i<newB.length; i++){
    sumB += newB[i];
  }
  return sumA > sumB ? true : false;
}
