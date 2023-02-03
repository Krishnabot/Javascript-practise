// The do/while loop is like a while loop, except that the loop expression is tested at the bottom of the loop rather than at the top.
// This means that the body of the loop is always executed at least once. The syntax is:

// do
//     statement
// while (expression);
function printArray(a) {
    let len = a.length, i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        } while(++i < len);
    }
}

let x =[];
let y = [1,3,5,7,9];
printArray(x);
printArray(y);