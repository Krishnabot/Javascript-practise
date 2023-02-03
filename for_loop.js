// // The for statement provides a looping construct that is often more convenient than the while statement.
// The for statement simplifies loops that follow a common pattern. Most loops have a counter variable of some kind.
// This variable is initialized before the loop starts and is tested before each iteration of the loop. 
// Finally, the counter variable is incremented or otherwise updated at the end of the loop body, just before the variable is tested again.
// In this kind of loop, the initialization, the test, and the update are the three crucial manipulations of a loop variable. 
// The for statement encodes each of these three manipulations as an expression and makes those expressions an explicit part of the loop syntax:

// // for(initialize ; test ; increment)
// //     statement

// Example

for(let count = 0; count < 10; count++) {
    console.log(count);
}

// a way to combine multiple initialization and increment expressions into a single expression suitable for use in a for loop:

let i, j, sum = 0;
for(i = 0, j = 10 ; i < 10 ; i++, j--) {
    sum += i * j;
}


// The for/of loop works with iterable objects. Arrays, strings, sets, and maps are iterable:
// they represent a sequence or set of elements that you can loop or iterate through using a for/of loop.

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum_all = 0;
for(let element of data) {
    sum_all += element;
}
 sum_all