//* Another type of Record
type Fooditem = {
  [index: string]: any;
};
const fooditem: Fooditem = {
  chiken: "gravy",
  KFC: "grill",
};

//*  any /unkown/never/void/null
let username: any = 10;
username.push(); //! this the problem any using time

let username2: unknown = "jsihnu";
const newvalue = username2 as string;
// newvalue. // in that time we can use 