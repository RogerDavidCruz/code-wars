// 7 kyu - Remove the minimum
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

const removeSmallest = numbers => {
    let newArr = numbers.slice();
    let smallest = [...numbers].sort((a,b) => a - b).shift();
    let idx = numbers.indexOf(smallest);
    newArr.splice(idx, 1);
    return newArr;
}
