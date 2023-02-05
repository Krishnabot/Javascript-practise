// // The for statement provides a looping construct that is often more convenient than the while statement.
// The for statement simplifies loops that follow a common pattern. Most loops have a counter variable of some kind.
// This variable is initialized before the loop starts and is tested before each iteration of the loop. 
// Finally, the counter variable is incremented or otherwise updated at the end of the loop body, just before the variable is tested again.
// In this kind of loop, the initialization, the test, and the update are the three crucial manipulations of a loop variable. 
// The for statement encodes each of these three manipulations as an expression and makes those expressions an explicit part of the loop syntax:

// // for(initialize ; test ; increment)
// //     statement

// Example

for (let count = 0; count < 10; count++) {
    console.log(count);
}

// a way to combine multiple initialization and increment expressions into a single expression suitable for use in a for loop:

let i, j, sum = 0;
for (i = 0, j = 10; i < 10; i++, j--) {
    sum += i * j;
}


// The for/of loop works with iterable objects. Arrays, strings, sets, and maps are iterable:
// they represent a sequence or set of elements that you can loop or iterate through using a for/of loop.

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum_all = 0;
for (let element of data) {
    sum_all += element;
}
console.log(sum_all); //45

//More example
let o = { x: 1, y: 2, z: 3 };
let keys = "";
for (let k of Object.keys(o)) {
    keys += k;
}
console.log(keys);  //xyz


/* for/in loop
 A for/in loop looks a lot like a for/of loop, with the of keyword changed to in. 
While a for/of loop requires an iterable object after the of, a for/in loop works with any object after the in. 
The for/of loop is new in ES6, but for/in has been part of JavaScript 
since the very beginning (which is why it has the more natural sounding syntax).

The for/in statement loops through the property names of a specified object. The syntax looks like this:

for (variable in object)
     statement 
*/

let anotherArray = { x: 1, y: 2, z: 3 };
let a = [], k = 0;
for (a[k++] in anotherArray); /* empty */