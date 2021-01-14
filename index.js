// console.log("Hello");
// console.log(res);
// var res = 2 * 3;

// let a;
// console.log(a);
// a = 5;
// console.log(a);
// const b = 10;
// console.log(b);

// console.log(typeof a);
// a = String(a);
// console.log(a);
// console.log(typeof a);

// console.log(typeof NaN);
// console.log(typeof Infinity);

// console.log(typeof null);
// console.log(typeof {});
// console.dir({});

// // falsy
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(false));

// console.log(5 + ``);
// console.log(5 + `5` + 5);
// console.log(`5` + 5 + 5);
// console.log(`5` * 5 + 5);
// console.log(`5` / 5 + 5);
// console.log((`5` + 5) * 5);
// console.log(`5` - 5 * 5);
// console.log(`3` - 3);
// console.log(`3` - true);

// // > < != ==
// // >= <=
// //          0  1   2
// const arr = [1, 2, 3]; // 3
// for (let i = 0; i < arr.length; i++) {
//   console.log("arr", arr[i]);
//   console.log(i);
// }
// const myFunc = function () {
//   console.log(`hello`);
// };
// const array = [myFunc, [], {}, "ghgh", 6];
// console.log(typeof myFunc);
// // console.log(array);
// const arr1 = array;
// const newArr = array.slice(1, -2);
// console.log("newArr", newArr);
// console.log("array", array);
// console.log(newArr === array);
// console.log(array === arr1);

// const spArr = array.splice(0, 1);
// console.log(spArr);
// console.log(array);

// const spArr1 = array.splice(4, 0, myFunc);
// console.log(spArr1);
// console.log(array);

// const spArr2 = array.splice(1, 3, "I Love JavaScript");
// console.log(spArr2);
// console.log(array);

// const allData = spArr.concat(spArr1, spArr2, "I Love React");
// // const allData = [...spArr, ...spArr1, ...spArr2, "I Love React"]; //spread
// console.log(allData);
// console.log(...allData);

// // function
// const f = function () {
//   console.log(arguments);

//   return this;
// };
// console.log(f());

// const f3 = (...args) => {
//   console.log(args);
//   console.log(this);
//   // console.log(arguments)
// };
// f3("a", "b", "c");

// // console.log(f2(2, 3, 5));
// console.log(f2(2, 3, undefined, 5));

// function f2(a, b, c = 0, d = 0) {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
//   console.log(this);
//   console.log(a, b, c, d);
// }

// console.dir(f);
// console.dir(f2);

// const obj1 = {
//   name: "",
//   myMethod1: f3,
//   myMethod2: f2,
// };
// const obj2 = {};

// obj1.myMethod1();
// obj1.myMethod2();

// obj1.myMethod2.call(obj2);
// obj1.myMethod2.apply(obj2, []);

// abc(obj1.myMethod2.bind(obj2));
// function abc(cb) {
//   cb();
// }

// 14.01.2021
let a = 5;
a = "cat";
a = null;

function b() {
  if (typeof a === "number") {
    // let c = 10;
    console.log(`it's number`);
  } else if (typeof a === "string") {
    console.log(`it's string`);
  } else {
    console.log(`Error`);
  }
  // console.log(c);
  // if (typeof a === "number") return console.log(`it's number`);
  // if (typeof a === "string") return console.log(`it's string`);
  // return console.log(`Error`);
}
b();
// switch (typeof a) {
//   case "number":
//     console.log(`it's number`);
//     break;

//   case "string":
//     console.log(`it's string`);
//     break;

//   default:
//     console.log(`Error`);
// }

const arr = [2, "2", 3];
console.log(arr);

for (let elem in arr) {
  console.log(elem);
}

for (let elem of arr) {
  console.log(elem);
}

const user = {
  name: "Sandra",
  age: 30,
};

for (let key in user) {
  console.log(key);
}

// for (let key of user) {
//   console.log(key);
// } // нельзя применять к объекту
const grandPa = {
  name: "grandPa",
};
console.log(grandPa);

// const newUser = Object.assign(user);
const father = Object.create(grandPa);
father.name = "father";
console.log(father);

const son = Object.create(father);
son.name = "son";
console.log(son);

const NewUser = function (a = "anonim", b, c) {
  console.log("Constructor");
  this.name = a;
  this.age = b;
  this.height = c;
};
NewUser.prototype.getNewAge = function () {
  this.age += 1;
};

// NewUser(); // call
const newObj = new NewUser(undefined, 22, 167); // constructor
console.log(newObj);

newObj.getNewAge();

//=======
class NewUserclass {
  static ownClassProp = "ownProp";
  constructor(a = "anonim", b, c) {
    console.log("Constructor");
    this.name = a;
    this.age = b;
    this.height = c;
  }

  getNewAge() {
    this.age += 1;
  }
  get userName() {
    return this.name;
  }
  set userName(value) {
    return (this.name = value);
  }
}
const classUser = new NewUserclass(undefined, 12, 150);
classUser.getNewAge();
console.log(classUser);
console.dir(NewUserclass);

console.log("getter:", classUser.userName);
console.log("prop:", classUser.name);

classUser.userName = "Name";

console.log("getter:", classUser.userName);
console.log("prop:", classUser.name);

class NewClass extends NewUserclass {
  constructor(a, b, c, d) {
    super(a, b, c);
    // this.weight = d;
  }
}
const newClassObj = new NewClass("new class", 12, 144, 30);
console.log(newClassObj);

const { name: userName, ...props } = newClassObj;
console.log(userName);
console.log(props);

const myArr = ["i", "love", "js"];
const [x, y, z] = myArr;
console.log(x);
console.log(y);
console.log(z);

const db = ["Hanna", "458937589272639504", 1, 0];
const [myUser, phone, ...args] = db;
console.log(myUser);
console.log(phone);
console.log(args);

const data = {
  name: "Hanna",
  phone: "48757834",
  ans1: 1,
  ans2: 0,
};
const myData = Object.keys(data);
const myValues = Object.values(data);
const myEntries = Object.entries(data);
console.log(myData);
console.log(myValues);
console.log(myEntries);

const mapArr = myData.map((elem, idx, arr) => {
  console.log(elem, idx);
  console.log(arr);
  return idx;
});

console.log("mapArr", mapArr);
console.log(myData);

const red = myValues.reduce((acc, elem, idx, arr) => {
  console.log(elem);
  if (idx === 0 || idx === 1) {
    acc.push(elem);
  }
  return acc;
}, []);
console.log(red);

const find = myValues.find((el) => el[0]);
console.log(find);

const filter = myValues.filter((el) => el[0]);
console.log(filter);

const every = myValues.every((elem) => elem.includes("Hanna"));
console.log(every);

const some = myValues.some((elem) => elem.includes("Hanna"));
console.log(some);

const newArray = [];
const forOf = myEntries.forEach((element) => {
  console.log(element);
  newArray.push(element[0]);
  return newArray;
});
console.log(newArray);
console.log(forOf);

const nums = [23, 22, 56, 3, 6, 66];
const sortNumms = nums.sort((x, y) => x - y);
console.log(sortNumms);
const sortNumms1 = nums.sort((x, y) => y - x);
console.log(sortNumms1);

const letters = ["danya", "fedya", "danil"];
const letSort = letters.sort();
console.log(letSort);
const rev = letSort.reverse();
const rev2 = letters.sort().reverse();
console.log(rev);
console.log(rev2);

const s = 3;
const key = "uuu";

const sass = {
  s,
  [key]: "",
  // ES5
  myMethod: function () {
    console.log(`ES5`);
  },
  
  // ES6
  ES6Method() {
    console.log(`ES6`);
  },
};
console.log(sass);
sass.myMethod();
sass.ES6Method();
