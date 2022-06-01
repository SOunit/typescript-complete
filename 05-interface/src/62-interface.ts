namespace sixTwo {
  interface Human {
    readonly name: string;
    age: number;
    // greeting: (message: string) => void;
    greeting(message: string): void;
  }

  interface Lazy {
    isLazy(): boolean;
  }

  const jack: Human = {
    name: 'Jack',
    age: 38,
    greeting(message: string) {
      console.log(message);
    },
  };

  class Developer implements Human, Lazy {
    constructor(
      public name: string,
      public age: number,
      public experience: number
    ) {}
    greeting(message: string): void {}
    isLazy(): boolean {
      return true;
    }
  }

  const tempDeveloper = {
    name: 'name',
    age: 38,
    experience: 10,
    greeting() {},
    isLazy() {
      return true;
    },
  };

  const user: Human = new Developer('Jack', 38, 3);
  const user2: Human = tempDeveloper;

  // 62. how to use interface
  // 1. only for object
  // 2. almost same with type alias
  // 3. type and interface was different before, but almost same now

  // 63. function syntax

  // 64. interface and class
  // 1. abstract has implementation, interface is pure interface, no implementation
  // 2. extends can have only 1, interface can has multiple interfaces
  // 3. interface only deals with object from class, so no static in interface

  // 65. structural sub-typing
  // 1. const user:Human can contain Developer object
  // 2. const abstract = new moreDetail(); this is ok!

  // 66. interface and readonly
  // 1. can use readonly in interface
  // 2. no public / private in interface

  // 67. interface and extends
}
