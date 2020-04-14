// 8 kyu - Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

function hello(name) {
  return name === '' || name === undefined ? "Hello, World!" : `Hello, ${name.toLowerCase().charAt(0).toUpperCase() + name.toLowerCase().slice(1)}!`;
}