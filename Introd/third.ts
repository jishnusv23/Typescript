class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return this.greeting;
  }
}
let greeter = new Greeter("Hello, world!");
console.log(greeter.greet());

//*Record
type Food = Record<string, string>; //i use value string in different value will come that time use any

const food: Food = {
  Pizz: "chicken",
  CHIKEN:'gravy'
};
