//coding challenge question
//7kyu - Is this a triangle?

// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).

//solution
function isTriangle(a,b,c){
  if (a+b<=c || a+c<=b || b+c<=a){
  return false;
  } else{
  return true;
  }
}

//trigonometry properties, how the sum of two sides of a triangle cannot be less than or equal than the other side of the triangle.
