// From an array of users, return only first names.

let str = [
  { name: "John Doe" },
  { name: "Jane Smith" }
];
let res = str.map((value)=>value.name.split(' ')[0]);
console.log(res);
