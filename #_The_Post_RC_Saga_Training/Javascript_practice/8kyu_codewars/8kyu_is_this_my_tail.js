// 8kyu - Is this my tail?
// https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript

function correctTail(body, tail) {
  let bodylength = body.length;
  let sub = body.substr(bodylength-(tail.length));

  if (sub === tail){
    return true
  }else {
    return false
  }
}
