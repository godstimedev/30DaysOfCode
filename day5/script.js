// array of objects input

const person = ["seun", 33, 200];

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

// function to return string as value
const printUser = (str) => {
  let value = `name: ${str[0]}, age: ${str[1]}, level: ${str[2]}`;
  let values = { ...value };
  return values;
};

console.log(printUser(person));

// outputs an array of string
// objOne = printUser(person[0]);
// let array1 = [objOne];
// console.log(array1);

// objTwo = printUser(people[0]);
// ObjThree = printUser(people[1]);
// let array2 = [objTwo, ObjThree];
// console.log(array2);
