// 7 kyu - Over The Road
// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript
//
// Task
// You've just moved into a perfectly straight street with exactly n identical
// houses on either side of the road. Naturally, you would like to find out the
// house number of the people on the other side of the street. The street looks
// something like this:

function overTheRoad(address, n){
return (n*2+1)-address;
}
