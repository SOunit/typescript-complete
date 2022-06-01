class Person {
  name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge() {
    this.age++;
  }

  // type for this syntax
  greeting(this: Person) {
    console.log(`hello my name is ${this.name}, ${this.age} years old!`);
  }
}

const jack = new Person('Jack', 38);
jack.greeting();
jack.incrementAge();
jack.greeting();
