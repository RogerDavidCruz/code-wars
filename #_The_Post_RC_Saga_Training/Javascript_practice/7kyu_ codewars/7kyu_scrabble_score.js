// https://www.codewars.com/kata/558fa34727c2d274c10000ae/train/javascript

const scrabbleScore = str => {
    if (str.length === 0) return 0
    return str.replace(/\s+/g, '').split('').reduce((accum, cv) => accum + $dict[cv.toUpperCase()],0)
}