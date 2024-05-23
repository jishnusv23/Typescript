//*convert into js using npx tsc file-name.ts

//*  Infer type

//*In TypeScript, the `infer` keyword is used within conditional types to infer or deduce the type of a generic parameter based on usage, allowing for flexible and dynamic type assignments within the type system.

let n = "jishnu";
//  n=0 the line was showing error beacuase by default the type is string

//*Defining Types

let userName: string = "jishnu sv";

let number: number = 344344434;

let itstrue: boolean = true;
let array: string[] = ["j", "i", "s", "h", "n", "u"];
// let array1:number[]=['j','i','s','h','n','u'] it showing error msg
let emptyArray: [] = [];
let emptyObject: {} = {};

let userDetail: { name: string; age: number } = { name: "jishnu", age: 21 };
// let userDetail:{name:string,age:number}={name:'jishnu',age:'21'} showing error
//define the type also

//*Interface
interface UserData {
  name: string;
  age: number;
}
interface UserData1 {
  name: string;
  age: number;
  getName: () => void;
}
let user: UserData = {
  name: "jsihnu",
  age: 20,
};
let user1: UserData1 = {
  name: "jsihnu",
  age: 20,
  getName() {
    console.log(this.name);
  },
};

//* Type
type UserIN = {
  name: string;
  age: number;
};
let userin: UserIN = {
  name: "jishnu",
  age: 20,
};

// let array1: string[] = ["j", "i", "s", "h", "n", "u",2,0]; the showing errror use union operator
let array1: (string | number | boolean)[] = [
  "j",
  "i",
  "s",
  "h",
  "n",
  "u",
  2,
  0,
  false,
];

//* Optional ? using keyword

type UserON = {
  name: string;
  age: number;
  getN?: () => void;
};
let useon: UserON = {
  name: "jishnu",
  age: 20,
};

//* workign the funtion
// type UserON1 = {
//   name: string;
//   age: number;
//   getN?: () => void;
// };
// let useon1: UserON1 = {
//   name: "jishnu",
//   age: 20,
// };

// function getuserName(userDetail: UserON1) {
//   return userDetail.name;
// }
// getuserName(useon1);

//? Another method
function getuserName1({ name, age }: { name: string; age: number }) {
  return name;
}
getuserName1({ name: "jishnu", age: 20 });

//* Set the return value have type
type UserON1 = {
  name: string;
  age: number;
  getN?: () => void;
};
let useon1: UserON1 = {
  name: "jishnu",
  age: 20,
};

function getuserName(userDetail: UserON1): string {
  //?we can use void aslo that using for check the argument in console
  return userDetail.name;
}
getuserName(useon1);

//*Named Type which means coustom type seting
type statusType = "pending" | "completed" | "failed";

let currenStatus: statusType = "completed"; //*check that auto prefer will come

//?Another example of 
type toggleSwitch='on'|'off'

 let button:toggleSwitch='on'