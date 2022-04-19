// array of objects input

const person = [
  {
    name: "Seun",
    age: 23,
    level: "100 level",
  },
];

const people = [
  {
    name: "Seern",
    age: 23,
    level: "500 level",
  },
  {
    name: "BBBgh",
    age: "twenty three",
    level: "year 1",
  },
];

let values = "";
// function to return string as value
const printUser = ({ name, age, level }) => {
  values = `${name}/${age}/${level}`;
  return values;
};

// outputs an array of string
objOne = printUser(person[0]);
let array1 = [objOne];
console.log(array1);

objTwo = printUser(people[0]);
ObjThree = printUser(people[1]);
let array2 = [objTwo, ObjThree];
console.log(array2);
