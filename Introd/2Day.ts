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
