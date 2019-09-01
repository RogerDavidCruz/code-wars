//8kyu - Area of Square
//Write the function squareArea(A) (square_area($A) in PHP) that finds the area of the red square when you have the length of the circular arc A.

//Solution:
function squareArea(A){
    return Number(Math.pow(2*A/Math.PI, 2).toFixed(2))
}

//Notes:
//The Math.pow() function returns the base to the exponent power, that is, baseexponent.
//Math.PI for Use π = Math.PI
//The toFixed() method formats a number using fixed-point notation.
