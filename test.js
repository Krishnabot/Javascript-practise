let o = { x: 1, y: 2, z: 3 };
let keys = "";
for (let k of Object.keys(o)) {
    keys += k;
}
console.log(keys);