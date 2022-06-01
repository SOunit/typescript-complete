namespace tmp {
  let stringType = 'hello';
  let helloOnly: 'hello' = `hello`;

  stringType = helloOnly;
  helloOnly = stringType;

  enum Color {
    RED,
    BLUE,
  }

  let red = Color.RED;
  let num = 0;
  red = num;
  num = red;

  let two = (a: string, b: string) => {};
  let one = (a: string) => {};
  two = one;
  one = two;

  class AdvancedPerson {
    name: string = 'Jack';
    age: number = 5;
  }
  class AdvancedCar {
    name: string = 'Jack';
    age: number = 5;
  }

  let person = new AdvancedPerson();
  let car = new AdvancedCar();
  person = car;
  car = person;
}

// Type Compatibility
// const human = jack
// const jack = human

// 1. string
// 2. enum
// 3. function
// 4. class
// - private, ng
// - no private, ok
