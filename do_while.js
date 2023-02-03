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