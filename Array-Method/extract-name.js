//Extract names from an array of objects.

let obj = [{name: "John"}, {name: "Jane"}];
let res = obj.map(value=>value.name);
console.log(res);
