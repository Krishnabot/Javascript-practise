/*
Another category of JavaScript statements are jump statements.
As the name implies, these cause the JavaScript interpreter to jump to a new location in the source code.
The break statement makes the interpreter jump to the end of a loop or other statement.
continue makes the interpreter skip the rest of the body of a loop and jump back to the top of a loop to begin a new iteration.
JavaScript allows statements to be named, or labeled, and break and continue can identify the target loop or other statement label.
*/

let matrix;  // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
let sum = 0, success = false;
// Start with a labeled statement that we can break out of if errors occur
computeSum: if (matrix) {
    for (let x = 0; x < matrix.length; x++) {
        let row = matrix[x];
        if (!row) break computeSum;
        for (let y = 0; y < row.length; y++) {
            let cell = row[y];
            if (isNaN(cell)) break computeSum;
            sum += cell;
        }
    }
    success = true;
}
// The break statements jump here. If we arrive here with success == false
// then there was something wrong with the matrix we were given.
// Otherwise, sum contains the sum of all cells of the matrix.

/*
The continue statement is similar to the break statement.
Instead of exiting a loop, however, continue restarts a loop at the next iteration.
The continue statement’s syntax is just as simple as the break statement’s:
The continue statement, in both its labeled and unlabeled forms, can be used only within the body of a loop.
Using it anywhere else causes a syntax error.
*/
for (let i = 0; i < data.length; i++) {
    if (!data[i]) continue;  // Can't proceed with undefined data
    total += data[i];
}


// return
function displayObject(o) {
    // Return immediately if the argument is null or undefined.
    if (!o) return;
    // Rest of function goes here...
}

//Throw

function factorial(x) {
    // If the input argument is invalid, throw an exception!
    if (x < 0) throw new Error("x must not be negative");
    // Otherwise, compute a value and return normally
    let f;
    for (f = 1; x > 1; f *= x, x--) /* empty */;
    return f;
}
console.log(factorial(4));  // => 24

// try/catch/finally


try {
    // Normally, this code runs from the top of the block to the bottom
    // without problems. But it can sometimes throw an exception,
    // either directly, with a throw statement, or indirectly, by calling
    // a method that throws an exception.
}
catch (e) {
    // The statements in this block are executed if, and only if, the try
    // block throws an exception. These statements can use the local variable
    // e to refer to the Error object or other value that was thrown.
    // This block may handle the exception somehow, may ignore the
    // exception by doing nothing, or may rethrow the exception with throw.
}
finally {
    // This block contains statements that are always executed, regardless of
    // what happens in the try block. They are executed whether the try
    // block terminates:
    //   1) normally, after reaching the bottom of the block
    //   2) because of a break, continue, or return statement
    //   3) with an exception that is handled by a catch clause above
    //   4) with an uncaught exception that is still propagating
}

// A real example 



try {
    // Ask the user to enter a number
    let n = Number(prompt("Please enter a positive integer", ""));
    // Compute the factorial of the number, assuming the input is valid
    let f = factorial(n);
    // Display the result
    alert(n + "! = " + f);
}
catch (ex) {     // If the user's input was not valid, we end up here
    alert(ex);  // Tell the user what the error is
}