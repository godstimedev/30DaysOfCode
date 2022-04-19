// array of objects input

const person = ["Seun", "23", "100 level"];
const people = [
  ["Seern", "23", "500 level"],
  ["BBBgh", "twenty three", "year 1"],
];

let values = {};
const printUser = (str) => {
  values.name = str[0];
  values.age = str[1];
  values.level = str[2];
  return values;
};

let val1 = printUser(person);
let arr1 = [val1];
let val2 = printUser(people[0]);
let val3 = printUser(people[1]);

let arr2 = [val2, val3];
console.log(arr1);
console.log(arr2);

// console.log(printUser(person));
// console.log(printUser(people[0]));
// console.log(printUser(people[1]));
