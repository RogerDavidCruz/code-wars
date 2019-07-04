// CodeWar Challenge

// Coding in function ```colorOf```. function accept 3 parameter:```r``` ```g``` ```b```. It means value of color red green and blue. the value range is 0-255.
//
// Use ```toString(16)``` Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
//
// the color code should starting with "#". and then use 2 characters per color.
//
// for example:
//
// ```
// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
//
// ```
//
// That's all of your work. My work is print your color code on your screen.

//Solution

function colorOf(r,g,b){
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  if (r.length<2){   //setting a condition for the zero digit
    r = "0" + r
    }
  if (g.length<2){  //condition needed for numbers less than 2
    g = "0" + g
    }
  if (b.length<2){  //hexa-decimal 010203 need conditional line
    b ="0" + b
    }
  return "#"+r+g+b  //return in the hexa-deci format as a string
}
