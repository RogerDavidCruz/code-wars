//7kyu - Coding Challenge - CodeWars
//Title: Adding words - Part I

//Instructions
//This is the first part of this kata series. Second part is here and third part is here
//Add two English words together!
//Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that
//Input - Will be between zero and ten and will always be in lower case
//Output - Word representation of the result of the addition. Should be in lower case

//Solution
let numbers = ['zero','one','two','three','four','five',
           'six','seven','eight','nine','ten','eleven',
           'twelve','thirteen','fourteen','fifteen','sixteen',
           'seventeen','eighteen','nineteen','twenty']

class Arith{
  constructor (a){
    this.a = a
    }
  add(b){
    return numbers[numbers.indexOf(this.a) + numbers.indexOf(b) ]
  }
}


//NOTES
//The constructor method is a special method for creating and initializing an object created within a class.
// this. = In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.
// this. = When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.
//While the default for a constructor is to return the object referenced by this, it can instead return some other object (if the return value isn't an object, then the this object is returned).
