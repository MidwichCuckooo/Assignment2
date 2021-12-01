//Check which shape has a larger area - a triangle with a given base and height or a
//rectangle with given height and width. Print “The rectangle has a bigger area” or “The
//triangle has a bigger area” respectively on the screen. Use any numbers for triangle
//base/height and rectangle base/height to test your code.

let triHeight = 25;
let triBase = 10;
let recHeight = 5;
let recWidth = 6;
let areaTri = (triHeight * triBase) / 2;
let areaRec = (recWidth * recHeight);

 if (areaTri > areaRec){
     console.log("The area of triangle is bigger");
 }
    else if (areaTri < areaRec){
        console.log("The area of rectangle is bigger");
    }
    else {
        console.log ("areas of triangle and rectangle are equal");
    }