//* FUNCTION OVERLOADING
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2); //4
// function addStr(num1: number | string, num2: number | string): number | string {
//   return num1 + num2;
// }
// addStr(2,2); //4
// addStr(2,2)//4 SHOWING ERROR  that time use //* any key word that not good way that completely reduce the ts power and covert into pure  js
//* IN THE CASE WE USE FUNCTION OVERLOADING
function addNS(num1: string, num2: string): string;
function addNS(num1: number, num2: number): number;
function addNS(num1: any, num2: any): any {
  return num1 + num2;
}
addNS(2, 2); //4
addNS("2", "2"); //22
// addNS([],[]) THAT WILL SHOWING ERROR BEACUSE WE OVERLOAD THE any USING FUNCTION

//* THIS IS NOT GOOD WAY USING OUR PROJECT THIS USAULLY USING IN LIBRARY
//*GENERICS<>

function genric<S>(age: S): S {
  return age;
}
genric<string>("20");
genric<number>(20);

type userDetail = {
  name: string;
  age: number;
};
type AdminDe = {
  firstname: string;
  salary: number;
};

let userD: userDetail = {
  name: "jsihnu",
  age: 20,
};
let admin: AdminDe = {
  firstname: "jsihnu",
  salary: 45000,
};
function Detailss<D>(detaili: D): D {
  return detaili;
}
const useraddre = Detailss<userDetail>(userD);
const adminaddre = Detailss<AdminDe>(admin);
console.log(useraddre.name);
console.log(adminaddre.firstname);

//*EXTEND THE TYPE USING METHOD

type userDetail2 = {
  name: string;
  age: number;
};
type AdminDe2 = userDetail2 & {
  salary: number;
};

//* SAME METHOD USING INTERFACE
interface userDetail3 {
  name: string;
  age: number;
}
interface AdminDe3 extends userDetail2 {
  salary: number;
}

//* ENUM its WORKING IN RUN TIME refer the documention thats better
// type statustype='pending'|'completed'|'failed'/
enum StatusType {
  Pending,
  Compeleted,
  Failed,
}
function orderDeat(orderid: string, StatusType: StatusType) {
  console.log(orderid, "==", StatusType);
}
orderDeat("kjfkdf2", StatusType.Compeleted);

//* as const //* THE METHOD CALLING TYPE CAST
let Firstname = "jishnu sv" as const; //? READ ONLY

//  Firstname='jishnu'

//*keyof typeof
const statustypes = {
  PENDIGN: "pending",
  COMPLETED: "completed",
  FAILED: "fail",
} as const;
function getstatus(orderid: string, status: keyof typeof statustypes) {
  console.log(orderid, "==", statustypes[status]);
}
getstatus("kfflsf", "PENDIGN");

//* utility type
    //1.Readonly ,2-Partiails,3-Required ,4-Pick ,5-Omit

     type UseAddress={
      name:string,
      age:number
     }

     const use:Readonly<UseAddress>={
      name:'jishnu',
      age:89
     }