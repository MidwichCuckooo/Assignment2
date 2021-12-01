//Solve the quadratic polynomial a*x^2 + b*x + c = 0. Log all possible solutions. This
//means if the equation has more than one answer, print X1 = <value> and X2 = <value>
//respectively. If there is only one answer, print X = <value>, and, “Unsolvable” if no
//answer. Also consider the case where a = 0. Use any numbers for a, b, c to test your
//code.

let a = 4;
let b = 5;
let c = 6;
let Disc = b ** 2 - 4 * a * c;
    let X1 = (-b - Math.sqrt(Disc)) / 2 * a;
    let X2 = (-b + Math.sqrt(Disc)) / 2 * a;

    if (Disc < 0) {
        console.log("wrong polynomial");
    }
    else if (Disc == 0) {
        console.log("there exist only one answer. x=" + X2);
    }
        else {
            console.log("the result is; x1 =" + X1 + "x2 =" + X2);
        }
