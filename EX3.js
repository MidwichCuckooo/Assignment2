//Given coordinates (x1, y1), (x2, y2) - find the length of the line from (x1, y1) to (x2, y2).
//Assume all numbers are zero or positive (Fall in the first quarter of x-y axis). Use any
//numbers for x1, y1, x2, y2 to test your code.

//(Bonus) Solve the 3rd problem where x1, y1, x2 and y2 can be either positive or negative
//(Can fall in any quarter of x-y axis).

let x1 = 25;
let x2 = -50;
let y1 = 10
let y2 = 14
 let Line = Math.sqrt((x2-x1) ** 2 + (y2-y1) ** 2 );
 console.log("the line is" + Line);


 