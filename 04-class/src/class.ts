class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName;
  }
}

const jack = new Person('Jack');

console.log(jack);
