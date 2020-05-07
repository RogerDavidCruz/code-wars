// 8kyu - Training JS #10: loop statement --for
// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

// Training JS #10:
// loop statement --for
//
// for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:
//
// function sum1_100(){
//   var sum=0,num=1
//   while (num<=100){
//     sum+=num;
//     num++;
//   }
//   return sum;
// }
// We can rewrite it by using for loop, like this:
//
// function sum1_100(){
//   for (var sum=0,num=1;num<=100;num++){
//     sum+=num;
//   }
//   return sum;
// }
// As you see, there are three parts in the brackets, separated by ";". The first part is the initialization variable, this part will run before the loop starts. The second part is the conditional expressions, check the expression before the start of each time loops, when the value of the expression is false, loop will be terminated. The third part is the statement about increasing and decreasing variables, they will run after the code block.
//
// For the example above, the running order of the code is:
//
//                               <--- back to part 2
//                   -------------------------------------------
//                   |                 true                    |
// var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
//                                 |
//                            false|
//                        loop terminated
// When you need to traverse an array, you can use the for loop. look this example:
//
// function displayElements(array){
//   for (var i=0;i<array.length;i++){
//     console.log(array[i]);
//   }
// }

const pickIt = array => {
  for (let i = 0; i < array.length; i++) {}
  return [array.filter(number => number % 2 !== 0), array.filter(number => number % 2 === 0)]
}
